from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(debug=True) 