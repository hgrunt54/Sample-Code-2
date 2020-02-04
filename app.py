import json
import sqlite3
from sqlite3 import Error
from contextlib import closing
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
    colors = sqlColors()
    return jsonify(colors)

def connectdb():
    conn = sqlite3.connect('Colors2.db', check_same_thread=False)
    return conn

def countColors():
    conn = connectdb()
    c = conn.cursor()
    query = '''SELECT * FROM Colors'''
    c.execute(query)
    ColorCount = len(c.fetchall())
    c.close()
    return ColorCount

def sqlColors():
    Colors = {'Colors':[]}
    x = 0
    colorCount = countColors()
    conn = connectdb()
    c = conn.cursor()
    query = '''SELECT Color FROM Colors'''
    c.execute(query)
    while x < colorCount:
        color = c.fetchone()
        Colors['Colors'].append(color[0])
        x += 1
    c.close()
    return Colors

if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5556'))
    except ValueError:
        PORT = 5556
    app.run(HOST, PORT)
