import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';


const Main = () => {
    return (
        <div className='bg-red-100'>
            <Header></Header>
            <Outlet></Outlet>
          
            <Footer></Footer>
        </div>
    );
};

export default Main;