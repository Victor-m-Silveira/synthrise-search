import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="ellipsis" color="#5e0459" height={550} width={80} />
  </div>
);
