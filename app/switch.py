import functools
import serial
import time
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from app.db import get_db
from . import packet

DEVICE_ADDRESS = 10

# 创建一个 blueprint
bp = Blueprint('switch', __name__, url_prefix='/switch')

@bp.route('/')
def device_registry():

    print("注册触控开关")
    # 1 表示 1键触控开关
    # 2 表示 2键触控开关
    # 3 表示 3键触控开关
    keypanel = request.args.get('keypanel', 0, type=int)
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
    # return Code 57 AB C0 01 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed
    print("第一次收到消息 = " + reading_str)

    if keypanel == 1:
        device_code = packet['One_Touch_Switch_RegisterID']
    elif keypanel == 2:
        #device_code = packet['Two_Touch_Switch_RegisterID']
        deviceAddress = str(DEVICE_ADDRESS)
        message_send = "FF FF CC 21 "+ deviceAddress +" 02 01 01"
    elif keypanel == 3:
        device_code = packet['Three_Touch_Switch_RegisterID']

    # set Device ID "FF FF CC 21 13 02 01 01"
    # Set Device 0xff  0xff  0xcc  0x21  0x13 0x02  0x01  0x01
    # FF FF code Stands for dispatching fix head
    # CC code stands for Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    # 02 code stands for Data length
    #01 01 code stands for LoraID
    print("第二次发送消息" + message_send)
    d = bytes.fromhex(message_send)
    ser.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = ser.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print("第二次收到消息 = " + reading_str)

    db = get_db()
    error = None

    if not deviceName:
        error = 'deviceName is required.'
    elif not deviceRoom:
        error = 'deviceRoom is required.'
    elif db.execute(
        'SELECT id FROM device WHERE deviceAddress = ?', (deviceAddress,)
    ).fetchone() is not None:
        error = 'deviceAddress {} is already registered.'.format(deviceAddress)

    if error is None:
        db.execute(
            'INSERT INTO device (deviceName, deviceAddress, deviceRoom, is_registered) VALUES (?, ?, ?, ?)',
            (deviceName, deviceAddress, deviceRoom, 1)
        )
        db.commit()

    DEVICE_ADDRESS++
    # 修改通信频率 '55 AA C1 02 01 01'
    # 55 AA 表示固定首部
    # C1 表示设置定义频率
    message_send = "55 AA C1 02 01 01"
    print("第三次发送消息" + message_send)
    d = bytes.fromhex(message_send)
    ser.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = ser.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print("第三次收到消息 = " + reading_str)
    # TODO:  Verity it is success

    ser.close()

    return jsonify(result=1, deviceID=reading_str)
