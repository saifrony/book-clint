import React from 'react';
import About from './About';
import Animate from '../shared/Animate';
import Slider from '../shared/Slider';
import Contact from './Contact';


const Home = () => {
    return (
        <div className=''>
            <Animate></Animate>
            <Slider></Slider>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;