import requests
from creds import TOGETHER_AI_API_KEY

req_header={
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": f"Bearer {TOGETHER_AI_API_KEY}"
    }
model_name="mistralai/Mixtral-8x7B-Instruct-v0.1"
api_url="https://api.together.xyz/v1/chat/completions"

def TopRawMaterialStates(item):
    url = api_url

    payload = {
        "messages": [
            {
                "role": "system",
                "content": "You are a highly precise machine designed to inform the user where a specific raw material is produced in India. Based on the input provided, identify the top 5 Indian states that produce this raw material. You must strictly output the names of the states in a comma-separated format without additional text or explanations."
            },
            {
                "role": "user",
                "content": f"array of top 5 places where {item} is produced in india"
            }
        ],
        "model": model_name
    }
    headers = req_header

    response = requests.post(url, json=payload, headers=headers)

    states=response.json()['choices'][0]['message']['content'].split(',')
    states=[state.strip() for state in states]
    return states

def BreakDown(product):
    url = api_url

    payload = {
        "messages": [
            {
                "role": "system",
                "content": "You are a highly precise machine designed to inform the user what all things are needed to make a specific item. Based on the input provided, identify the top 3 raw materials needed to make that product. You must strictly output the names of the raw materials in a comma-separated format without additional text or explanations."
            },
            {
                "role": "user",
                "content": f"array of top 5 things needed to make {product}"
            }
        ],
        "model": model_name
    }
    headers = req_header

    response = requests.post(url, json=payload, headers=headers)

    items=response.json()['choices'][0]['message']['content'].split(',')
    items=[item.strip() for item in items]
    return items

def cook_instructions(raw_materials,product):
    url = api_url

    payload = {
        "messages": [
            {
                "role": "system",
                "content": "Given some raw materials in the form of an array provide a simple guide as a para (striclty 45 words) on how to manufacture the final product Use industry terminology and focus on the processes involved, including preparation, assembly, and quality control. Ensure the response emphasizes durability, compliance with industry standards, and any relevant eco-friendly practices."
            },
            {
                "role": "user",
                "content": f"raw materials: {' '.join(raw_materials)}; final product: {product}"
            }
        ],
        "model": model_name
    }
    headers = req_header

    response = requests.post(url, json=payload, headers=headers)

    instructions=response.json()['choices'][0]['message']['content']
    return instructions
