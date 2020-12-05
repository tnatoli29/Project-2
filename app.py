from flask import Flask, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/api/v1.0/olympics")
def olympics():
    """Return Olympic Dashboard"""

  


@app.route("/")
def welcome():
    return (
        f"Welcome!<br/>"
        f"Available Routes:<br/>"
        
    )


if __name__ == "__main__":
    app.run(debug=True)