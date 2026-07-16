from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from extensions import db

#initialize Flask app and configure database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books_app.db'
db = SQLAlchemy(app)


# Create the database tables inside an application context
with app.app_context():
    db.create_all()

app = Flask(__name__)
CORS(app)

@app.route('/api/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    return jsonify([{"id": book.id, "title": book.title, "author": book.author} for book in books])

@app.route('/api/books', methods=['POST'])
def add_book():
    data = request.get_json

if __name__ == '__main__':
    app.run(debug=True, port=5000)
