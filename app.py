import json
from flask import Flask, request, render_template, jsonify, make_response
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)


# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/colors')
def colors():
    colors = {'Colors': ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Cyan']}
    return jsonify(colors)

if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5556'))
    except ValueError:
        PORT = 5556
    app.run(HOST, PORT)
