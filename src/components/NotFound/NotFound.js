import React from 'react';
import notFound from '../../assets/images/notfound.jpg';

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img className="w-full h-screen" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
