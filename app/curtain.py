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

DEVICE_ADDRESS = 60

# 创建一个 blueprint
bp = Blueprint('curtain', __name__, url_prefix='/curtain')

@bp.route('/')
def device_registry():

    global DEVICE_ADDRESS

    print("注册窗帘")
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
    message_send = "FF FF CC 11 "+ deviceAddress +" 02 01 01"

    # set Device ID "FF FF CC 10 11 02 01 01"
    # Set Device 0xff  0xff  0xcc  0x21  0x13 0x02  0x01  0x01
    # FF FF code Stands for dispatching fix head
    # CC code stands for Set Device ID
    # 11 code stands for Curtain
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
            (11, deviceName, deviceAddress, deviceRoom, 1)
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
def get_curtain():
    db = get_db()

    devices = db.execute(
        'SELECT deviceAddress FROM device WHERE deviceType = ?', (11,)
    ).fetchall()

    deviceList = []
    for device in devices:
        deviceList.append(device[0])

    jsonDevice = json.dumps(deviceList, ensure_ascii=False)

    print(jsonDevice)

    return jsonify(result=jsonDevice)




@bp.route('/opencurtainfull')
def open_curtain_full():

    print("窗帘到 100%")
    curtainAddress = request.args.get('curtainAddress', 0, type=int)
    print(curtainAddress)

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3

    # Device Register "01 01 bb 10 30 64 00"
    # 01 01 code Stands for LoraID Address
    # bb code stands for control code
    # 11 code stands for Open Window Machine Type
    # 30 code stands for Open Window Machine Address
    # 64 open window percent
    message_send = "01 01 bb 11 "+ str(curtainAddress) +" 64"
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




@bp.route('/closecurtainfull')
def close_curtain_full():

    print("窗帘到 0%")
    curtainAddress = request.args.get('curtainAddress', 0, type=int)
    print(curtainAddress)

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
    message_send = "01 01 bb 11 "+ str(curtainAddress) +" 00"
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




@bp.route('/stop')
def stop_curtain():

    print("停 窗帘")
    curtainAddress = request.args.get('curtainAddress', 0, type=int)
    print(curtainAddress)

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
    message_send = "01 01 bb 11 "+ str(curtainAddress) +" ff"
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






@bp.route('/reverse')
def reverse_curtain():

    print("反转 窗帘")
    curtainAddress = request.args.get('curtainAddress', 0, type=int)
    print(curtainAddress)

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
    message_send = "01 01 b1 11 "+ str(curtainAddress) +" 01"
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





@bp.route('/check')
def check_curtain():

    print("校准 窗帘")
    curtainAddress = request.args.get('curtainAddress', 0, type=int)
    print(curtainAddress)

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
    message_send = "01 01 b0 10 "+ str(curtainAddress) +" 01"
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
    ser = 0

    #Device Register
    # Step 1 Open the serial port
    try:
        ser = serial.Serial('/dev/ttyAMA0',230400)
        ser.timeout = 1
        #ser.flushinput()
        # Device Register "01 01 bb 10 30 64 00"
        # 01 01 code Stands for LoraID Address
        # aa code stands for control code
        # 10 code stands for Open Window Machine Type
        # 30 code stands for Open Window Machine Address
        # 64 open window percent
        message_send = "01 01 aa 10 " + str(openWindowAddress)
        print("发送消息" + message_send)
        message_send_hex = bytes.fromhex(message_send)
        ser.write(message_send_hex)

        while True:
            if ser.inWaiting() > 0:
                break;
            time.sleep(0.5)

        reading = ser.read(10)
        reading_str = ''.join(['%02x ' % b for b in reading])
        # return Code 01 01 aa 10 31 01 09
        # 01 01 stands for LoraID
        # aa code stands for control code
        # 10 code stands Open Window Machine
        # 31 code stands for Open Window Address
        # 09 code 当前位置
        print("收到消息 = " + reading_str)
        fix_head = "01 01 aa 10 " + str(openWindowAddress) +" 01"
        if(reading_str.find(fix_head) >= 0):
            start = len(fix_head) + reading_str.find(fix_head) + 1
            currentHexVal =  reading_str[start:start + 3]
            percentValue = int(currentHexVal, 16)
            print("百分比" + str(percentValue))
            return jsonify(result=percentValue)
    except:
        if ser:
            ser.close()


    return jsonify(result=0)




@bp.route('/freewindow')
def free_window_macine():

    print("开窗器到 特定值")
    openWindowAddress = request.args.get('openWinowMachineAddress', 0, type=int)
    freeToggleVal = request.args.get('freeToggleVal', 0, type=int)
    print(openWindowAddress)
    print(freeToggleVal)
    freeToggleValStrHex = str(hex(freeToggleVal))
    if freeToggleVal <= 15:
        freeToggleValStr = '0' + freeToggleValStrHex[2:]
    else:
        freeToggleValStr = freeToggleValStrHex[2:]

    ser = 0

    #Device Register
    # Step 1 Open the serial port
    try:
        ser = serial.Serial('/dev/ttyAMA0',230400)
        ser.timeout = 1
        #ser.flushinput()
        # Device Register "01 01 bb 10 30 64 00"
        # 01 01 code Stands for LoraID Address
        # aa code stands for control code
        # 10 code stands for Open Window Machine Type
        # 30 code stands for Open Window Machine Address
        # 64 open window percent
        message_send = "01 01 bb 10 " + str(openWindowAddress) + " " + freeToggleValStr
        print("发送消息" + message_send)
        message_send_hex = bytes.fromhex(message_send)
        ser.write(message_send_hex)

        while True:
            if ser.inWaiting() > 0:
                break;
            time.sleep(0.5)

        reading = ser.read(10)
        reading_str = ''.join(['%02x ' % b for b in reading])
        # return Code 01 01 aa 10 31 01 09
        # 01 01 stands for LoraID
        # aa code stands for control code
        # 10 code stands Open Window Machine
        # 31 code stands for Open Window Address
        # 09 code 当前位置
        print("收到消息 = " + reading_str)

        fix_head = "01 01 bb 10 " + str(openWindowAddress)
        if(reading_str.find(fix_head) >= 0):
            return jsonify(result=1)
    except:
        if ser:
            ser.close()

    return jsonify(result=-1)
