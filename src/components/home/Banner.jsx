import React from 'react'
import bannerImage from './3918306.jpg';
import useAuth from '../../hooks/userAuth';
import { Link } from 'react-router-dom';



export const Banner = () => {
  const {user}=useAuth()
  return (
    <div className="hero h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-white">Welcome to Film Fanatic</h1>
          <p className="mb-5 text-xl text-gray-200">
            Discover, explore, and dive into the world of movies. Join us to keep track of your favorite films, directors, and genres.
          </p>
{
  user?  <Link to={'/dashboard/all-products'}><button className="btn btn-primary btn-lg">Explore Now </button></Link> : <button className="btn btn-primary btn-lg"> <Link to={'/login'}>Explore Now</Link> </button>

}

         
        </div>
      </div>
    </div>
  )
}
