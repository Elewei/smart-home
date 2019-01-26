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
    if form.validate_on_submit():
    	#message_registry = device_registry()
        #message_device_id = set_device_id()
    	session['message'] = set_device_id()
    	flash(message)
    	return redirect(url_for('index'))
    return render_template('index.html', form=form, message = session.get('message'))


def device_registry():
    #Device Register
    message = "Device Register"
    # Step 1 Open the serial port
    s = serial.Serial('/dev/ttyAMA0',230400)
    # Device Register
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    d = bytes.fromhex('55 AA C0 02 FF FF')
    s.write(d)

    reading = s.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])
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

    # Set Device 0xff  0xff  0xcc  0x21  0x13 0x02  0x01  0x01
    # FF FF code Stands for dispatching fix head
    # CC code stands for Set Device ID
    # 21 code stands for 2 touch switch
    # 13 code stands for DeviceID
    # 02 code stands for Data length
    #01 01 code stands for LoraID
    d = bytes.fromhex('ff ff cc 21 13 02 01 01')
    s.write(d)

    reading = s.read(6)
    reading_str = ''.join(['%02x ' % b for b in reading])

    s.close()
    return reading_str



class NameForm(FlaskForm):
    submit = SubmitField('Open')



if __name__ == '__main__':
    app.run()
