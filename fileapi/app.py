from flask import Flask, jsonify, request
import os

from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return jsonify({"data": "data"})
    if request.method == 'POST':
        file = request.files['file']
        file.save(os.path.join("storage", secure_filename(file.filename)))
        file_length = os.stat("storage/"+file.filename).st_size
        data = {
            "file_type": file.content_length,
            "file_name": file.filename,
            "mime_type": file.mimetype,
            "name": file.name,
            "size": file_length / 1024
        }

        return jsonify({"data": data})


if __name__ == "__main__":
    app.run(debug=True, port=3001)
