import functools
import serial
import time
import json
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from app.db import get_db

DEVICE_ADDRESS = 10

# 创建一个 blueprint
bp = Blueprint('scene', __name__, url_prefix='/scene')



@bp.route('/add')
def scene_add():

    print("添加情景")
    error = None
    sceneName = "模式"
    sceneBackground = "default/path"
    db = get_db()
    
    if not sceneName:
        error = 'sceneName is required.'
    elif not sceneBackground:
        error = 'sceneBackground is required.'

    if error is None:
        db.execute(
            'INSERT INTO scene (sceneName, sceneBackground) VALUES (?, ?)',
            (sceneName, sceneBackground)
        )
        db.commit()



    return jsonify(result=0)



@bp.route('/getall')
def scene_getall():

    print("获取所有情景")

    error = None

    db = get_db()
    
    scenes = db.execute(
        'SELECT sceneName FROM scene'
    ).fetchall()

    sceneList = []
    
    print(scenes)

    for scene in scenes:
        sceneList.append(scene[0])

    print(sceneList)

    jsonScene = json.dumps(sceneList, ensure_ascii=False)
    print(jsonScene)


    return jsonify(result=jsonScene)
