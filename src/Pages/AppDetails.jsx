import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApp';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const AppDetails = () => {
    const {id} = useParams()
    const {apps,loading} = useApps()
    const app = apps.find(p=> String(p.id) === id)
    const {title,image ,downloads,ratingAvg} = app || {}
    if(loading) return <p>Loading</p>
    const handleInstall = () => {
        const exist = localStorage.getItem('install')
        let List = []
        if(exist){
            const parsed = JSON.parse(exist)
            const duplicate = parsed.find(p=> p.id === app.id)
            app.quantity = app.quantity + 1
            if(duplicate) return alert('already installed')
                List =[...parsed,app]
        }else{
            List.push(app)
        }
    localStorage.setItem('install',JSON.stringify(List))
    alert('App installed successfully')
    }
    return (
       <div className='p-5 border-gray-400 border-2'>
                  <figure className='h-48 overflow-hidden items-center flex hover:scale-105'>
                    <img className='w-full object-cover' src={image} alt="" />
                  </figure>
                   <h1 className='font-semibold py-4'>{title}</h1>
                   <div className='flex justify-between gap-2'>
                       <div className='text-green-300 bg-green-100 flex items-center py-1 px-2 '>
                           <FaDownload />
                           <span >{downloads}</span>
                       </div>
                          <div className='text-orange-500 bg-amber-100 flex items-center py-1 px-2'>
                          <FaStar />
                           <span>{ratingAvg}</span>
                       </div>
                   </div>
                   <button className='bg-purple-400 text-white p-4' onClick={handleInstall}>Install</button>
               </div>
    );
};

export default AppDetails;