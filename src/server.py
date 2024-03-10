from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)


# Define routes
@app.route('/local-hospitals', methods=['GET'])
def get_items():
    # Create a connection to the SQLite database
    conn = sqlite3.connect('./local_hospitales.sqlite') 
    c = conn.cursor()

    # Retrieve all items from the database
    c.execute("SELECT * FROM hospitales")
    items = c.fetchall()

    # Close the connection
    conn.close()

    # Convert the items to a JSON format and return
    return jsonify({'hospitals': items})

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

