from flask import Flask, send_from_directory, request, redirect
import os

app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

# Force HTTPS in production
@app.before_request
def before_request():
    if not request.is_secure and os.environ.get('PYTHONANYWHERE_DOMAIN'):
        url = request.url.replace('http://', 'https://', 1)
        return redirect(url, code=301)

if __name__ == '__main__':
    app.run(debug=True, port=5999) 