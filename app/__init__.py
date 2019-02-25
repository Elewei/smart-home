import os

from flask import Flask
from . import db
from . import auth
from . import switch
from . import main
from . import open_window_machine
from . import curtain
from . import smartplug
from . import airbox

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='smart-home',
        DATABASE=os.path.join(app.instance_path, 'app.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # init Database
    db.init_app(app)

    # 注册blueprint
    app.register_blueprint(switch.bp)
    app.register_blueprint(main.bp)
    app.register_blueprint(auth.bp)
    app.register_blueprint(open_window_machine.bp)
    app.register_blueprint(curtain.bp)
    app.register_blueprint(smartplug.bp)
    app.register_blueprint(airbox.bp)

    # make url_for('index') == url_for('blog.index')
    # in another app, you might define a separate main index here with
    # app.route, while giving the blog blueprint a url_prefix, but for
    # the tutorial the blog will be the main index
    app.add_url_rule('/', endpoint=main.index)

    return app
