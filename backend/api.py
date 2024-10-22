from flask import Flask,jsonify
api=Flask(__name__)

@api.route('/')
def home():
    return jsonify('hello seizo')

api.run(debug=True)
