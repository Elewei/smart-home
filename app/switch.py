import functools
import serial

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from app.db import get_db
from . import packet

# 创建一个 blueprint
bp = Blueprint('switch', __name__, url_prefix='/switch')

@bp.route('/')
def device_registry():

    print("In Switch Function")
    keypanel = request.args.get('keypanel', 0, type=int)
    key = request.args.get('key', 0, type=int)
    state = request.args.get('state', 0, type=int)
    print(keypanel)
    print(key)
    print(state)
    return jsonify(result="Ok")
    '''
    #Device Register
    # Step 1 Open the serial port
    ser = serial.Serial('/dev/ttyAMA0',230400)
    ser.timeout = 3
    # Device Register
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    message_send = packet['Register_Header'] + ' ' + packet['Default_Frequency'] + ' ' + packet['Data_Length'] + ' ' + packet['LoRa_ID_Broadcast']
    message_send_hex = bytes.fromhex(message_send)
    ser.write(message_send_hex)

    reading = s.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print(reading_str)
    # return Code 57 AB C0 01 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed

    ser.close()
    return reading_str
    '''
