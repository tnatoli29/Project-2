import csv
from flask import Flask, render_template, json
import os


# File path for read csv file and write to json file
csvFilePath = "Resources/usaGoldMedals.csv"
jsonFilePath = "Resources/usaGoldMedals.json"

# Read the csv and add the data to a dictionary
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        year = csvRow["year"]
        data[year] = csvRow

with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))     

# print(data)



