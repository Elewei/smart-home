from flask import Flask, render_template, Response, request, redirect, url_for, session,flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
import serial
import string
import binascii

app = Flask(__name__)
app.config['SECRET_KEY'] = "smart home"

bootstrap = Bootstrap(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
    	message = move_forward()
    	session['message'] = message
    	flash(message)
    	return redirect(url_for('index'))
    return render_template('index.html', form=form, message = session.get('message'))


def move_forward():
    #Moving forward code
    message = "Moving Forward..."
    s = serial.Serial('/dev/ttyAMA0',230400)
    d=bytes.fromhex('10 11 12 34 3f')
    s.write(d)
    s.close()
    print(message)
    return d





class NameForm(FlaskForm):
    submit = SubmitField('Open')



if __name__ == '__main__':
    app.run()
