import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from test_model import run_classifier


app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    print("running server side get")
    return jsonify({'text':'Hello World!'})

@app.route('/file', methods = ['POST'])
def analyseFile():
    print("running server side post")
    print(request.data)
    print(request.FormData.files)
    return jsonify({'text':'Hello World!'})

@app.route('/path', methods = ['POST'])
def analysePath():
    print("user input path received")
    print("additional data")
    print(request.data)
    print(run_classifier(request.data))
    return jsonify({'text':run_classifier(request.data)})

if __name__ == '__main__':
     app.run(port=5002)
