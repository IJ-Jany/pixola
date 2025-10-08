import React, { useState } from 'react';
import useApps from '../hooks/useApp';
import AppCard from '../Components/AppCard';
import notfoundimg from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const Apps = () => {
    const {apps} = useApps('apps')
    const[search,setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchApps = term ? apps.filter(app=>
     app.title && app.title.toLocaleLowerCase().includes(term)
    ) : apps
    console.log(searchApps)
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Our All Applications</h1>
            <p className='text-center py-4 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
              <h1 className='font-bold'>({apps.length})Apps Found</h1>
              <div>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
              </div>
             
            </div>
            {searchApps.length === 0 ? (
             <div className='p-4 flex flex-col justify-center items-center'>
              <img src={notfoundimg} alt="" />
            <h1 className='font-bold text-3xl py-4'>OPPS!!APP NOT FOUND</h1>
            <p className='text-gray-500'>The App you are requesting is not found on our system. Please try another apps.</p>
            <button className='bg-purple-500 text-white py-2 px-3 mt-2'><NavLink to='/'>Go Back</NavLink></button>
         </div>
            ): (
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
            searchApps.map(app=> (
                <AppCard key={app.id} app={app}/>
            ))
           }
          </div>
            )}
            
        </div>
        
    );
};

export default Apps;