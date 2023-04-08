import React from 'react';
import book1 from '../assant/book1.jpg';
import './animate.css';
const Animate = () => {
    return (
        <div className=' w-full h-96'>
            <div className='mt-96 '>
            <div className='card '>
                <div className='imgbox'>
                    <img src={book1} alt='' className='imj' style={{
                       

                    }}/>
                </div>
                <div className='details'>
                    <h2 className=' bg-red-300 text-2xl rounded'>Welcome to Book World</h2>
                    <p>A place where one can find Books on Various Topics such as academic books, biography or auto biography, novel, poem, story, magazines, news papers. Some stationary shops are also available. One can get many facilities in Nil-Kheet apart from buing books. Restaurants and fast food shops are also available there.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Animate;