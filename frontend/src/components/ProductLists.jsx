import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ onSelectBook }) => {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(() => {
   // Fetches books from the Flask backend port 5000
   fetch('http://localhost:5000/api/books')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       setBooks(data);
       setLoading(false);
     })
     .catch((err) => {
       setError(err.message);
       setLoading(false);
     });
 }, []);


 if (loading) return <div>Loading books...</div>;
 if (error) return <div>Error loading books: {error}</div>;


 return (
   <div className="product-list-container">
     <h2>Our Collection</h2>
     <div className="product-list-grid">
       {books.length === 0 ? (
         <p>No books found.</p>
       ) : (
         books.map((book) => (
           <ProductCard
             key={book.id}
             book={book}
             onViewDetails={onSelectBook}
           />
         ))
       )}
     </div>
   </div>
 );
};


export default ProductList;


