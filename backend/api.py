from creds import TOGETHER_AI_API_KEY
from helpers import TopRawMaterialStates,BreakDown
from flask import Flask,request
from flask_cors import CORS

api=Flask(__name__)
CORS(api)

@api.route('/')
def home():
    return 'welcome to seizo'

@api.route('/top5states')
def top5states():
    item = request.args.get('item')
    return TopRawMaterialStates(item)

@api.route('/breakdownproduct')
def breakdown():
    product = request.args.get('product')    
    return BreakDown(product)

api.run(debug=True)


