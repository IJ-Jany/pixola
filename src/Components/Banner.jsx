import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import heroImg from '../assets/hero.png'

const Banner = () => {
    return (
        <div>


            <h1 className='md:text-5xl font-bold  text-center text-3xl w-[280px] md:w-full'>We Build <br /> <span className='text-purple-600 mr-4'>Productive</span>Apps</h1>

            <p className='text-center text-gray-500 my-4'>At pixola, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

             <div className='flex items-center gap-3 justify-center mb-8'>

                <div className='flex items-center border-2 border-gray-300 w-[150px] p-2'>
                    <span className='w-[35px] text-emerald-400'><IoLogoGooglePlaystore /> </span>
                   <a href='https://play.google.com/store/' className='font-semibold'>Google Play </a>
                </div>

                <div className='flex items-center border-2 border-gray-300 w-[150px] p-2'>
                    <span className='w-[35px] text-sky-600'><FaAppStoreIos /></span>
                    <a href='https://www.apple.com/app-store/' className='font-semibold'>App store </a>
                </div>
                
                </div>

         <div className='flex items-center justify-center'>
             <img src={heroImg} alt="" />
        </div>
        </div>

    );
};

export default Banner;