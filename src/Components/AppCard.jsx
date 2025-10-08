import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        
       <Link to={`/app/${app.id}`}>
        <div className='p-5 border-gray-400 border-2'>
           <figure className='h-48 overflow-hidden items-center flex hover:scale-105'>
             <img className='w-full object-cover' src={app.image} alt="" />
           </figure>
            <h1 className='font-semibold py-4'>{app.title}</h1>
            <div className='flex justify-between gap-2'>
                <div className='text-green-300 bg-green-100 flex items-center py-1 px-2 '>
                    <FaDownload />
                    <span >{app.downloads}</span>
                </div>
                   <div className='text-orange-500 bg-amber-100 flex items-center py-1 px-2'>
                   <FaStar />
                    <span>{app.ratingAvg}</span>
                </div>
            </div>
        </div>
         </Link>
    );
      
};

export default AppCard;