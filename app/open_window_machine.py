import functools
import serial
import json
import time
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from app.db import get_db
from . import packet

DEVICE_ADDRESS = 32

# 创建一个 blueprint
bp = Blueprint('openwindowmachine', __name__, url_prefix='/openwindowmachine')

@bp.route('/')
def device_registry():

    global DEVICE_ADDRESS

    print("注册开窗器")
    deviceName = request.args.get('registerDeviceName', 0, type=str)
    deviceRoom = request.args.get('registerDeviceRoom', 0, type=str)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3
    # Device Register "55 AA C0 02 FF FF"
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    message_send = "55 AA C0 02 FF FF"
    print("第一次发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 57 AB C0 01 00 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed
    print("第一次收到消息 = " + reading_str)

    deviceAddress = str(DEVICE_ADDRESS)
    message_send = "FF FF CC 10 "+ deviceAddress +" 02 01 01"

    # set Device ID "FF FF CC 10 11 02 01 01"
    # Set Device 0xff  0xff  0xcc  0x21  0x13 0x02  0x01  0x01
    # FF FF code Stands for dispatching fix head
    # CC code stands for Set Device ID
    # 10 code stands for Open Window Machine
    # 13 code stands for DeviceID
    # 02 code stands for Data length
    #01 01 code stands for LoraID
    print("第二次发送消息" + message_send)
    d = bytes.fromhex(message_send)
    ser.write(d)
    ser.timeout = 5

    # return Value 01 01 cc 10 11
    # 01 01 code Stands for LoraID
    # cc Stands for control code Set Device ID
    # 10 code stands for open window machine
    # 11 code stands for DeviceID
    reading = ser.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print("第二次收到消息 = " + reading_str)
    if "01 01 cc 10" in reading_str:
        start = reading_str.find("01 01 cc 10")
        end = start + 14
        receiveDeviceAddress =  reading_str[end-2: end]
        if receiveDeviceAddress == deviceAddress:
            pass
        else:
            d = bytes.fromhex(message_send)
            ser.write(d)
    else:
        d = bytes.fromhex(message_send)
        ser.write(d)

    # 插入数据库
    db = get_db()
    error = None

    if not deviceName:
        error = 'deviceName is required.'
    elif not deviceRoom:
        error = 'deviceRoom is required.'
    elif not deviceAddress:
        error = 'deviceAddress is required.'
    elif db.execute(
        'SELECT id FROM device WHERE deviceAddress = ?', (deviceAddress,)
    ).fetchone() is not None:
        error = 'deviceAddress {} is already registered.'.format(deviceAddress)

    if error is None:
        db.execute(
            'INSERT INTO device (deviceType, deviceName, deviceAddress, deviceRoom, is_registered) VALUES (?, ?, ?, ?, ?)',
            (10, deviceName, deviceAddress, deviceRoom, 1)
        )
        db.commit()
    else:
        return jsonify(result=0)

    DEVICE_ADDRESS += 1
    # 修改通信频率 '55 AA C1 02 01 01'
    # 55 AA 表示固定首部
    # C1 表示设置定义频率
    message_send = "55 AA C1 02 01 01"
    print("第三次发送消息" + message_send)
    d = bytes.fromhex(message_send)
    ser.write(d)
    ser.timeout = 5
    # return Value 57 AB C1 01 00
    # 57 AB code Stands for LoraID
    # C1 Stands for control code Set Device ID
    # 01 code stands for Data Length
    # 00 code stands for Success
    # if FF is Failer
    reading = ser.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print("第三次收到消息 = " + reading_str)

    # TODO:  Verity it is success
    sureString = "57 AB C1"
    if sureString in reading_str:
        start = reading_str.find(sureString)
        end = start + len(sureString) + 3
        dataLen =  reading_str[end-2: end]
        if(dataLen == '01'):
            value = reading_str[end+1: end+2]
            if value == '00':
                pass
            else:
                message_send = "55 AA C1 02 01 01"
                print("第三次发送消息" + message_send)
                d = bytes.fromhex(message_send)
                ser.write(d)
    else:
        message_send = "55 AA C1 02 01 01"
        print("第三次发送消息" + message_send)
        d = bytes.fromhex(message_send)
        ser.write(d)


    ser.close()

    return jsonify(result=1, deviceID=deviceAddress)





@bp.route('/getall')
def get_open_window_macine():
    db = get_db()

    devices = db.execute(
        'SELECT deviceAddress FROM device WHERE deviceType = ?', (10,)
    ).fetchall()

    deviceList = []
    for device in devices:
        deviceList.append(device[0])

    jsonDevice = json.dumps(deviceList, ensure_ascii=False)

    print(jsonDevice)

    return jsonify(result=jsonDevice)




@bp.route('/openwindowfull')
def open_window_macine_full():

    print("开窗器到 100%")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 bb 10 "+ str(openWindowAddress) +" 64"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)




@bp.route('/closewindowfull')
def close_window_macine_full():

    print("开窗器到 0%")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 bb 10 "+ str(openWindowAddress) +" 00"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)




@bp.route('/stopwindow')
def stop_window_macine():

    print("停止开窗器")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 bb 10 "+ str(openWindowAddress) +" ff"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)






@bp.route('/reversewindow')
def reverse_window_macine():

    print("反转 开窗器")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 b1 10 "+ str(openWindowAddress) +" 01"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)





@bp.route('/checkwindow')
def check_window_macine():

    print("校准 开窗器")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 b0 10 "+ str(openWindowAddress) +" 01"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)





@bp.route('/getwindow')
def get_window_macine():

    print("获取 开窗器 位置")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    print(openWindowAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 10 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 aa 10 " + str(openWindowAddress)
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 01 01 bb 10 31 01
    # 01 01 stands for upload fix head
    # bb code stands for control code
    # 10 code stands Open Window Machine
    # 31 code stands for Open Window Address
    # 01 code stands Success
    print("第一次收到消息 = " + reading_str)


    ser.close()
    return jsonify(result=1)
