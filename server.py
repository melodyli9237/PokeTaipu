import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify


app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    print("running server side get")
    return jsonify({'text':'Hello World!'})

class Employees(Resource):
    def get(self):
        print("running server side get")
        return {'employees': [{'id':1, 'name':'Balram'},{'id':2, 'name':'Tom'}]}

class Employees_Name(Resource):
    def get(self, employee_id):
        print('Employee id:' + employee_id)
        result = {'data': {'id':1, 'name':'Balram'}}
        return jsonify(result)

class Employees_Name(Resource):
    def get(self, employee_id):
        print('Employee id:' + employee_id)
        result = {'data': {'id':1, 'name':'Balram'}}
        return jsonify(result)

@app.route('/file', methods = ['POST'])
def analyseFile():
    print("running server side post")
    # run code
    # return jsonified type
    return jsonify({'text':'Hello World!'})

@app.route('/path', methods = ['POST'])
def analysePath():
    print("user input path received")
    print(request.data)
    # run_model(filePath=request.data)
    # return jsonified({'text':'lable of your image is water'})
    return jsonify({'text':'user input path received'})

api.add_resource(Employees, '/employees') # Route_1
api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3
#api.add_resource(Employees, '/file')

if __name__ == '__main__':
     print("running server side get")
     app.run(port=5002)
