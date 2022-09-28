import React from 'react';
import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-white'>
      <img className='w-28 h-28' src={spinner} alt="" />
    </div>
  );
};

export default Spinner;