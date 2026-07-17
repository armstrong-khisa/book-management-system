import React, { useState, useEffect } from 'react';


const BookPage = ({ bookId, onBack }) => {
 // State to hold the specific book's data, loading status, and any network errors
 const [book, setBook] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(() => {
   // 1. Reset states whenever the bookId changes
   setLoading(true);
   setError(null);


   // 2. Fetch the specific book from the Flask backend using the passed bookId
   fetch(`http://localhost:5000/api/books/${bookId}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error('Failed to fetch the details for this book.');
       }
       return response.json();
     })
     .then((data) => {
       setBook(data); // Save the book object to state
       setLoading(false);
     })
     .catch((err) => {
       setError(err.message);
       setLoading(false);
     });
 }, [bookId]); // The dependency array ensures this runs again if a different bookId is passed


 // 3. Conditional rendering based on the request status
 if (loading) return <div>Loading book details...</div>;
 if (error) return <div>Error: {error}</div>;
 if (!book) return <div>No book data found.</div>;


 // 4. Render the successfully fetched data
 return (
   <div className="book-page-container">
     <button onClick={onBack} className="back-button">
       ← Back to List
     </button>
    
     <div className="book-details-card">
       <h1>{book.title}</h1>
       <p className="book-author">By: {book.author}</p>
      
       {/* If your database model eventually includes more fields, you can add them below */}
       {book.description && <p className="book-description">{book.description}</p>}
       {book.price && <span className="book-price">${book.price}</span>}
     </div>
   </div>
 );
};


export default BookPage;


