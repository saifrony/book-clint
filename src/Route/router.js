import About from "../component/About";
import Contact from "../component/Contact";
import Error from "../component/Error";
import Home from "../component/Home";
import Details from "../component/Product/Details";
import Porducts from "../component/Product/Porducts";
import Product from "../component/Product/Product";

import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'/about',
                element:<About></About>
                
            },
            {
                path:'/contact',
                element:<Contact></Contact>
                
            },
            {
                path:'/product',
                element:<Porducts></Porducts>,
                loader:()=> fetch('http://localhost:5000/books')
                
            },
            {
                path:'/details',
                element:<Details></Details>,
                loader:({params})=> fetch(`http://localhost:5000/books/${params.id}`)
            }

           
            ]},
       
])