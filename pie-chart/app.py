#################################################
# Flask
#################################################
import csv
import json
from flask import Flask, render_template

app = Flask(__name__)


csvfile = open('../Resources/olympics.csv', 'r')
jsonfile = open('../Resources/convertedJSON.json', 'w')

fieldnames = ("id","year","sport","sex","nationality","medal","name")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')



#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    message = "Hello, World"
    print("../Resources/convertedJSON.json")
    return convertedJSON.json

if __name__ == "__main__":
    app.run(debug=True)