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
    	message = device_registry()
    	session['message'] = message
    	flash(message)
    	return redirect(url_for('index'))
    return render_template('index.html', form=form, message = session.get('message'))


def handle_data(data):
    print(data)

def read_from_port(ser):
    while not connected:
        #serin = ser.read()
        connected = True

        while True:
           print("test")
           reading = ser.readline().decode()
           handle_data(reading)


def device_registry():
    #Device Register
    message = "Device Register"
    # Step 1 Open the serial port
    s = serial.Serial('/dev/ttyAMA0',230400)
    thread = threading.Thread(target=read_from_port, args=(s,))
    thread.start()
    # Device Register
    # 55 AA code Stands for dispatching fix head
    # C0 code stands for disapching default frequency
    # 02 code stands for data length
    # FF FF code stands for Lora ID
    d = bytes.fromhex('55 AA C0 02 FF FF')
    s.write(d)


    # return Code 57 AB C0 01 00
    # 57 AB stands for upload fix head
    # C0 code stands for set default frequency
    # 01 code stands data length
    # 00 code stands frequence Success
    # FF code stands frequence Failed

    s.close()
    return d




class NameForm(FlaskForm):
    submit = SubmitField('Open')



if __name__ == '__main__':
    app.run()
