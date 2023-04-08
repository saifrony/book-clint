import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Porducts = () => {
    const books =useLoaderData();
    return (
        <div className='m-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
           
            {
                books.map(book=><Product key={book._id}
                book={book}></Product>)
            }
        </div>
    );
};

export default Porducts;