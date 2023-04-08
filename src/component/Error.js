import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center my-24 '>
            <img src="https://uxdworld.com/wp-content/uploads/2019/01/404-banner.jpg" alt="" />
           
        </div>
            <p className='text-center '><Link className='bg-green-400 rounded p-3' to='/'>Home</Link></p>
         </div>

    );
};

export default Error;