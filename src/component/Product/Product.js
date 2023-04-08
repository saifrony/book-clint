import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({book}) => {
    
    return (
        <div className='mt-10  '>
            <div className=" w-96 bg-gray-400 shadow-xl rounded">
        <figure className="px-10 pt-10">
            <img src={book.img} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{book.name}</h2>
            <h2 className="card-title">{book.writter}</h2>
            <p>{book.Details}</p>
            <div className="card-actions">
            <button className="btn btn-primary"><Link to={'/details'}>Details</Link></button>
            </div>
        </div>
        </div> 
        </div>
    );
};

export default Product;