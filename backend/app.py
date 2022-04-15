from ast import arguments
from flask import Flask, request
from flask_cors import CORS
import json
import random
import requests


app = Flask(__name__)
cors = CORS(app , resources={r"/*": {"origins": "http://localhost:3000"}})


#route pokemon to api request
@app.route("/pokemon")
def pokemon():
    args = request.args
    id = args.get('id')

    print(id)
    
    pokemon_url = 'https://pokeapi.co/api/v2/pokemon/'
    
    print(id)
    api_url = pokemon_url + id
    p1 = requests.get(api_url)

    print("Player 1 Pokemon is " + p1.json()['name'] +"!")
    print(p1.json()['name'] + "can use attacks: " + p1.json()['abilities'][0]['ability']['name'] + " and " + p1.json()['abilities'][1]['ability']['name'] )
    print(p1.json()['moves'][0]['move']['name'])


    pokemon_data = {}
    pokemon_data['id'] = id
    pokemon_data['name'] = p1.json()['name']
    pokemon_data['hp'] = p1.json()['base_experience']
    length = len(p1.json()['moves'])
    randommove = random.randint(0,length)
    pokemon_data['moves'] = p1.json()['moves'][randommove]['move']['name']
    pokemon_data['img'] = p1.json()['sprites']['front_default']

    json_data = json.dumps(pokemon_data)

    return (json_data)


if __name__ == "__main__":
        app.run(debug=True)