import React, {  useState } from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { loadInstallList } from '../utils/localStorage';

const Installation = () => {
    const [install,setInstall] = useState(()=>loadInstallList())
    const [sort,setSort] = useState('none')
    // useEffect(()=> {
    //     const savedList = JSON.parse(localStorage.getItem('install'))
    //     if(savedList) setInstall(savedList)
    // },[])

    if(!install.length) return <p> No apps Found</p>

    const sortedItem =( ()=> {
        if(sort === 'asc'){
            return [...install].sort((a,b)=>a.downloads - b.downloads)
        }else if(sort === 'desc'){
             return [...install].sort((a,b)=>b.downloads - a.downloads)
        }else{
          return  install
        }
    }
    )()
    const handleUninstall = (id) => {
        const exist = JSON.parse(localStorage.getItem('install'))
            const List = exist.filter(p=> p.id !== id)
            setInstall(List)
    localStorage.setItem('install',JSON.stringify(List))
    }
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Your Installed Apps</h1>
            <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex items-center justify-between py-6'>
                <h1 className='text-xl font-bold'>{sortedItem.length} Apps Found</h1>
               <div>
                 <label className='w-full max-w-xs'>
                    <select className='select select-bordered' value={sort} onChange={e => setSort(e.target.value)}>
                    <option value="none">Sort by download </option>
                    <option value="asc">Low-&gt;high</option>
                    <option value="desc">high-&gt;low</option>
                 </select>
                 </label>
               </div>
            </div>
            {
                sortedItem.map(p=>
                    <div className='flex items-center justify-between border-1 border-gray-400 p-4 gap-50 mb-10'>
                        <div className='flex items-center justify-between gap-5'>
                            <img className='w-[250px]' src={p.image} alt="" />
                            <div>
                                <h1 className='font-bold pb-2'>{p.title}</h1>
                                <div className='flex items-center'>
                                     <div className='text-green-300  flex items-center py-1 px-2 '>
                                                        <FaDownload />
                                                        <span >{p.downloads}</span>
                                                    </div>
                                                       <div className='text-orange-500 flex items-center py-1 px-2'>
                                                       <FaStar />
                                                        <span>{p.ratingAvg}</span>
                                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=> handleUninstall(p.id)} className='bg-green-400 text-white py-2 px-3'>Uninstall</button>
                    </div>
                )
            }
           
        </div>
    );
};

export default Installation;