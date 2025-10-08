import React from 'react';

const States = () => {
    return (
        <div className='bg-purple-500'>
              <h1 className='text-white font-bold text-2xl text-center'>Trusted By Millions, Built For You</h1>
              <div className='flex flex-col md:flex-row justify-between items-center p-4'>
                <div className='text-white flex flex-col items-center gap-2'>
                    <h5 className='text-sm'>Total Downloads</h5>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <h5>21% more than Last Month</h5>
                </div>
                 <div className='text-white flex flex-col items-center gap-2'>
                    <h5 className='text-sm'>Total reviews</h5>
                    <h1 className='text-5xl font-bold'>906K</h1>
                    <h5>46% more than Last Month</h5>
                </div>
                 <div className='text-white flex flex-col items-center gap-2'>
                    <h5 className='text-sm'>Active Apps</h5>
                    <h1 className='text-5xl font-bold'>132+</h1>
                    <h5>31 More Will Launch</h5>
                </div>
              </div>

        </div>
    );
};

export default States;