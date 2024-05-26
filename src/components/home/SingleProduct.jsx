import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/userAuth'

export const SingleProduct = ({movie}) => {
  const {user}=useAuth()
  const {id,title,director,genre,description,release_year,rating,image_url}=movie
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full object-cover" src={image_url} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{director}</h3>
        <div className="flex flex-wrap mb-2">
    {genre.map((genre, index) => (
      <span key={index} className="mr-2 mb-2 bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-800">{genre}</span>
    ))}
  </div>
        <h3 className="text-xl font-semibold">Release Year: {release_year}</h3>
        <h3 className="text-xl font-semibold">Rating: {rating}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
        {user ? (
      <Link to={`/movie/${id}`}>
        <button className="btn btn-primary mr-2">Read More</button>
      </Link>
    ) : (
      <Link to={'/login'}>
        <button className="btn btn-primary mr-2">Read More</button>
      </Link>
    )}
        </div>
      </div>
      </div>
);
};



