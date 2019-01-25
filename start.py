from flask import Flask, render_template, Response, request, redirect, url_for, session,flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = "smart home"

bootstrap = Bootstrap(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
    	message = move_forward()
    	session['message'] = message
    	flash('Successed!')
    	return redirect(url_for('index'))
    return render_template('index.html', form=form, message = session.get('message'))


def move_forward():
    #Moving forward code
    message = "Moving Forward..."
    print(message)
    return message



class NameForm(FlaskForm):
    submit = SubmitField('Open')




