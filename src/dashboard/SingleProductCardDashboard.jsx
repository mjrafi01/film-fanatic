import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export const SingleProductCardDashboard = ({ movie, onDelete }) => {
  const { id, title, director, genre, description, release_year, rating, image_url } = movie;

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        onDelete(id);
        toast.success('Movie deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting movie:', error);
        toast.error('Failed to delete movie.');
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full object-cover" src={image_url} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{director}</h3>
        <h3 className="text-xl font-semibold">Release Year: {release_year}</h3>
        <h3 className="text-xl font-semibold">Rating: {rating}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/movie/${id}`} className="btn btn-primary">See details</Link>
          <Link to={`/dashboard/movie/edit/${id}`} className="btn bg-green-500">Edit</Link>
          <button onClick={() => setShowModal(true)} className="btn bg-red-500">Delete</button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-xl">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this movie?</p>
            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="btn mr-4">Cancel</button>
              <button onClick={handleDelete} className="btn bg-red-500">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};