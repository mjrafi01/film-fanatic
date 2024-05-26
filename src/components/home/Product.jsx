import React from 'react';
import { SingleProduct } from './SingleProduct';

export const Product = ({ data }) => {
  return (
    <div>
      <h1 className='my-8 text-5xl font-bold text-center mt-20'>Top Rating Movies</h1>
      <div className='flex flex-wrap justify-center gap-14 mt-20'>
        {data.slice(0, 3).map(movie => (
          <SingleProduct key={movie.id} movie={movie} />
          
        ))}
       
      </div>
    </div>
  );
};
