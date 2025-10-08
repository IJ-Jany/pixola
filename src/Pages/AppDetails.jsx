import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApp';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const {id} = useParams()
    const {apps,loading} = useApps()
    const app = apps.find(p=> String(p.id) === id)
    const {title,image ,downloads,ratingAvg,reviews,companyName,description,ratings} = app || {}
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
    //    <div className='p-5 border-gray-400 border-2'>
    //               <figure className='h-48 overflow-hidden items-center flex hover:scale-105'>
    //                 <img className='w-full object-cover' src={image} alt="" />
    //               </figure>
    //                <h1 className='font-semibold py-4'>{title}</h1>
    //                <div className='flex justify-between gap-2'>
    //                    <div className='text-green-300 bg-green-100 flex items-center py-1 px-2 '>
    //                        <FaDownload />
    //                        <span >{downloads}</span>
    //                    </div>
    //                       <div className='text-orange-500 bg-amber-100 flex items-center py-1 px-2'>
    //                       <FaStar />
    //                        <span>{ratingAvg}</span>
    //                    </div>
    //                </div>
    //                <button className='bg-purple-400 text-white p-4' onClick={handleInstall}>Install/uninstall</button>
    //                <p>reviews:{reviews}</p>
    //            </div>
    <div>
        <div className='py-6 flex items-center justify-between gap-10'>
        <img className='w-[250px] border-1 border-gray-400' src={image} alt="" />
        <div>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <h5 className='text-sm text-gray-500'>Developed by <span className='text-purple-700 font-bold'>{companyName}</span></h5>
            <hr />
            <div className=' flex gap-8 py-4'>
                <div>
                    <img src={downloadImg} alt="" />
                    <p className='text-gray-500'>Downloads</p>
                    <h1 className='font-bold text-2xl'>{downloads}</h1>
                </div>
                <div>
                    <img src={ratingImg} alt="" />
                    <p className='text-gray-500'>Average Ratings</p>
                    <h1 className='font-bold text-2xl'>{ratingAvg}</h1>
                </div>
                 <div>
                    <img src={reviewImg} alt="" />
                    <p className='text-gray-500'>Total Reviews</p>
                    <h1 className='font-bold text-2xl'>{reviews}</h1>
                </div>
            </div>
            <hr />
            <button className='bg-green-400 text-white py-2 px-3 mt-4' onClick={handleInstall}>Install Now</button>
        </div>
        </div>
        <hr />
 <div className='space-y-3'>
                <div className='h-80'>
 <ResponsiveContainer width="100%" height="100%">
      <BarChart data={ratings}  >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#FF7F50" />
       
      </BarChart>
    </ResponsiveContainer>
                </div>
            </div>
            <hr />
        <div>
        <h1 className='font-bold text-2xl'>Description</h1>
        <p className='text-gray-500'>{description}</p>
        </div>
    </div>
    );
};

export default AppDetails;