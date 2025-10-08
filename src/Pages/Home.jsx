import React from 'react';
import Banner from '../Components/Banner';
import States from '../Components/States';
import useApps from '../hooks/useApp';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';
import LoadSpinner from '../Components/LoadSpinner';

const Home = () => {
    const {apps,loading,error} = useApps()
    console.log(apps)
    const featuredApps = apps.slice(0,8)
    return (

        <div>
           <Banner/>
           <States/>
           <h1 className='py-4 text-center font-bold text-5xl '>Trending Apps</h1>
           <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
            featuredApps.map(app=> (
                <AppCard key={app.id} app={app}/>
            ))
           }
          </div>
          <div className='text-center pt-4'>
             <button className='bg-purple-500 text-white py-2 px-3'><Link to='/apps'>Show All</Link></button>
          </div>
          {/* {
            loading? <LoadSpinner/>
          } */}
        </div>
    );
};

export default Home;