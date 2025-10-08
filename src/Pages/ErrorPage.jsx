import { Home } from 'lucide-react';
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router';
import errorimg from '../assets/error-404.png'


const ErrorPage = () => {
    return (
        <div>
            <Navbar/>

         
         <div className='p-4 flex flex-col justify-center items-center'>
            <img src={errorimg} alt="" />
            <h1 className='font-bold text-3xl py-4'>OPPS!!page not found!</h1>
            <p className='text-gray-500'>The page you are looking is not available. </p>
            <button className='bg-purple-500 text-white py-2 px-3 mt-2'><NavLink to='/'>Go Back</NavLink></button>
         </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;