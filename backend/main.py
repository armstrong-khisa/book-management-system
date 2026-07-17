from flask import Flask, jsonify, request
from flask_cors import CORS

from extensions import db
from models.book import Book

app = Flask(__name__)

# Enable CORS
CORS(app)

# Configure database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///books_app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize SQLAlchemy
db.init_app(app)

# Create database tables
with app.app_context():
    db.create_all()


@app.route("/api/books", methods=["GET"])
def get_books():
    books = Book.query.all()

    return jsonify([
        {
            "id": book.id,
            "title": book.title,
            "author": book.author
        }
        for book in books
    ])


@app.route("/api/books", methods=["POST"])
def add_book():
    data = request.get_json()

    new_book = Book(
        title=data["title"],
        author=data["author"]
    )

    db.session.add(new_book)
    db.session.commit()

    return jsonify({
        "id": new_book.id,
        "title": new_book.title,
        "author": new_book.author
    }), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)