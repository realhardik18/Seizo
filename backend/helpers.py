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