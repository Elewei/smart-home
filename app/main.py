import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from app.db import get_db
from app.chinatime import this_month

bp = Blueprint('main', __name__)


@bp.route('/')
def index():

    this_month()
    return render_template('index.html')
