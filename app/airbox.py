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


# 创建一个 blueprint
bp = Blueprint('airbox', __name__, url_prefix='/airbox')

@bp.route('/')
def get_data():

    print("获取空气盒子数据")

    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3
    # Device Register "55 AA C0 02 FF FF"
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    message_send = "01 01 aa 50 c8 06 01 02 03 04 05 06"
    print("发送消息" + message_send)
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = ser.read(20)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # return Code 57 AB C0 01 00 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed
    print("第一次收到消息 = " + reading_str)

    ser.close()

    return jsonify(result=1)
