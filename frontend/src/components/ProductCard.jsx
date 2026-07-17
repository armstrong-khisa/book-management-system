import React from 'react';


const ProductCard = ({ book, onViewDetails }) => {
 return (
   <div className="product-card">
     <h1>{book.title}</h1>
     <p>By: {book.author}</p>
     <button onClick={() => onViewDetails(book.id)}>
       View Details
     </button>
   </div>
 );
};


export default ProductCard;
