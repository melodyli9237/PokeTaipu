import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import sys
sys.path.insert(1, '/Users/melodyli/Desktop/newproj/PokeTaipuSRC/Data Cleaning & Deep Learning Models/')
# sys.path.insert(1, '/PokeTaipu-master 2/Data Cleaning % Deep Learning Models/')
import model
from model import classify


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
    typeIndex = classify(request.data)
    return jsonify({'text':toType(typeIndex)})

def toType(index):
    typeList = ["Fire", "Water", "Grass", "Eletric", "Psychic", "Steel", "Normal", "Fairy", "Dark", "Flying", "Ghost", "Poison", "Ice", "Ground", "Rock", "Dragon", "Fighting","Bug"]
    return typeList[index]

if __name__ == '__main__':
     app.run(port=5002)
