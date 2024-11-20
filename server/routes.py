from flask import jsonify, request
import requests

def init_routes(app):
    @app.route('/browse', methods=['POST'])
    def browse():
        data = request.json
        url = data.get('url')
        try:
            response = requests.get(url)
            return jsonify({
                'status': 'success',
                'content': response.text
            })
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 400

    @app.route('/download', methods=['POST'])
    def download():
        data = request.json
        url = data.get('url')
        try:
            response = requests.get(url)
            filename = url.split('/')[-1]
            with open(filename, 'wb') as f:
                f.write(response.content)
            return jsonify({
                'status': 'success',
                'filename': filename
            })
        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 400