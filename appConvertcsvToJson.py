
import csv
from flask import Flask, render_template, json, current_app as app
import os
# static/data/test_data.json

csvFilePath = "Resources/olympics.csv"
jsonFilePath = "Resources/olympics.json"

# Read the csv and add the data to a dictionary

data = {}
with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        id = csvRow["id"]
        data[id] = csvRow

with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))     

print(data)



