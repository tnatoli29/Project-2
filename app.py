# Import dependencies
import flask
from flask import request, url_for, render_template, redirect, send_from_directory
from config import mapbox_access_token

# Import flask and path of the static folder for finding all necessary files for running html page.
app = flask.Flask(__name__, static_url_path=('/static'))

# Make a app route to the map page.
# Use GET to request data from a specified resource.
# Use Post to send the data to a server to create and update a resource.
@app.route('/')
def my_maps():

  return render_template('map_index.html',

        # Import api keys for the mapbox for loading.
        mapbox_access_token=mapbox_access_token)

if __name__ == '__main__':
    app.run(debug=True)