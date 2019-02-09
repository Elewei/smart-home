from flask import Flask, render_template, Response, request, redirect, url_for, session,flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

import serial
import threading
import string
import binascii

app = Flask(__name__)
app.config['SECRET_KEY'] = "smart home"

bootstrap = Bootstrap(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    close = CloseForm()

    if form.validate_on_submit():
        two_switch_on()
        get_status()
        #session['message'] = message_host_fre
        #flash(session.get('message'))
        return redirect(url_for('index'))

    if close.validate_on_submit():
        two_switch_off()
        #session['message'] = message_host_fre
        #flash(session.get('message'))
        return redirect(url_for('index'))

    return render_template('index.html', form=form, message = session.get('message'))


def device_registry():
    #Device Register
    message = "Device Register"
    # Step 1 Open the serial port
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3
    # Device Register
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    d = bytes.fromhex('55 AA C0 02 FF FF')
    s.write(d)

    reading = s.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
    print(reading_str)
    # return Code 57 AB C0 01 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed

    s.close()
    return reading_str


def set_device_id():
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3
    # Set Device 0xff  0xff  0xcc  0x21  0x13 0x02  0x01  0x01
    # FF FF code Stands for dispatching fix head
    # CC code stands for Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    # 02 code stands for Data length
    #01 01 code stands for LoraID
    d = bytes.fromhex('ff ff cc 21 13 02 01 01')
    s.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = s.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # TODO:  Verity it is success
    print(reading_str)

    s.close()
    return reading_str


def change_host_fre():
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3

    d = bytes.fromhex('55 AA C1 02 01 01')
    s.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = s.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # TODO:  Verity it is success
    print(reading_str)


    s.close()
    return reading_str



def two_switch_on():
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3
    # Open the switch
    # 01 01 stands for HostID
    # BB stands for Control Code
    # 21 stands for two switch code
    # 13 stands for LoraID
    # 02 stands for sub Device ID
    # 00 stands on
    d = bytes.fromhex('01 01 BB 21 13 02 00')
    s.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = s.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # TODO:  Verity it is success
    print(reading_str)


    s.close()
    return reading_str



def two_switch_off():
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3

    # Open the switch
    # 01 01 stands for HostID
    # BB stands for Control Code
    # 21 stands for two switch code
    # 13 stands for LoraID
    # 02 stands for sub Device ID
    # 00 stands on
    d = bytes.fromhex('01 01 BB 21 13 02 01')
    s.write(d)

    # return Value 01 01 cc 21 13
    # 01 01 code Stands for LoraID
    # cc Stands for code Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    reading = s.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # TODO:  Verity it is success
    print(reading_str)


    s.close()
    return reading_str





def get_status():
    s = serial.Serial('/dev/ttyAMA0',230400)
    s.timeout = 3

    # Open the switch
    # 01 01 stands for HostID
    # BB stands for Control Code
    # 21 stands for two switch code
    # 13 stands for LoraID
    # 02 stands for sub Device ID
    # 00 stands on
    d = bytes.fromhex('01 01 AA 21 13 02 01 02')
    s.write(d)

    # return Value 01 01 aa 21 13 04 01 01 02 00
    # 01 01 code Stands for LoraID
    # aa Stands for code get status
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    # 04 Data length
    # 01 01 (0) stands for close
    # 02 00 (1)
    reading = s.read(10)
    reading_str = ''.join(['%02x ' % b for b in reading])
    # TODO:  Verity it is success
    print(reading_str)


    s.close()
    return reading_str






class NameForm(FlaskForm):
    submit = SubmitField('Open')

class CloseForm(FlaskForm):
    submit = SubmitField('Close')

if __name__ == '__main__':
    message_registry = device_registry()
    message_device_id = set_device_id()
    message_host_fre = change_host_fre()
    app.debug = True
    app.run(host='0.0.0.0')
