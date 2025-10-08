import React from 'react';
import { useNavigation } from 'react-router';

const LoadSpinner = () => {
  const navigation = useNavigation()
  if(navigation.state === 'loading'){
    return (
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
           <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
        </div>
    );
  }
  return null
};

export default LoadSpinner;