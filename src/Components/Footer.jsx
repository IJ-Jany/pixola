import React from 'react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-blue-950 p-4 md:p-8 lg:p-12'>
       <div className='border-b-1 border-gray-400 w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center'>
            <img className='w-[35px] ' src="./logo.png" alt="" />
            <span className='text-white'>Pixola</span>
        </div>
        <div className='mb-4'>
                <ul className='text-white'>
                <li className='text-lg font-bold'>Social Links</li>
                <li className='flex gap-1'> <Facebook /> Facebook</li>
                <li className='flex gap-1'><Twitter /> Twitter</li>
                <li className='flex gap-1'>    <Instagram />
Instagram</li>
              </ul>
        </div>
         <div className='mb-4'>
                <ul className='text-white'>
                <li className='text-lg font-bold'>Apps</li>
                <li className='flex gap-1'> Mac</li>
                <li className='flex gap-1'>Windows</li>
                <li className='flex gap-1'>Android</li>
              </ul>
        </div>
         <div className='mb-4'>
                <ul className='text-white'>
                <li className='text-lg font-bold'>Legal</li>
                <li className='flex gap-1'> Terms of use</li>
                <li className='flex gap-1'>Privacy policy</li>
                <li className='flex gap-1'>Cookie policy</li>
              </ul>
        </div>
         
       </div>

       <h3 className='text-white text-center'>Copyright @ 2025 - All right reserved</h3>
        </footer>
    );
};

export default Footer;