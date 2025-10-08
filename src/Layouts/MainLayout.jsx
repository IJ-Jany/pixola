import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import LoadSpinner from '../Components/LoadSpinner';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <LoadSpinner/>
            <Navbar/>
            <div className='max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 flex-1'>
             <Outlet/>
        </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;