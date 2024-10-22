from creds import TOGETHER_AI_API_KEY
from helpers import TopRawMaterialStates
from flask import Flask,request

api=Flask(__name__)

@api.route('/')
def home():
    return 'welcome to seizo'

@api.route('/top5states')
def top5states():
    item = request.args.get('item')
    return TopRawMaterialStates(item)


api.run(debug=True)


