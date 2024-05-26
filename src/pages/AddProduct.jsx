import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AddProduct = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const director = form.director.value;
    // const genre = form.genre.value;
    const description = form.description.value;
    const release_year = form.release_year.value;
    const rating = form.rating.value;
    const image_url = form.image_url.value;
    const data = { id, title, director, description, release_year, rating, image_url };

    // Show the confirmation modal
    setShowConfirmModal(true);
  };

  const handleConfirmAddMovie = async () => {
    const form = document.getElementById('add-movie-form');
    const id = form.id.value;
    const title = form.title.value;
    const director = form.director.value;
    // const genre = form.genre.value;
    const description = form.description.value;
    const release_year = form.release_year.value;
    const rating = form.rating.value;
    const image_url = form.image_url.value;
    const data = { id, title, director, description, release_year, rating, image_url };

    // Close the confirmation modal
    setShowConfirmModal(false);

    // Add the movie
    await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success('Movie added successfully!');
      })
      .catch(error => {
        console.error('Error adding movie:', error);
        toast.error('Failed to add movie.');
      });
  };

  return (
    <>
      <h1 className='text-5xl font-extrabold text-center'>Add Movie</h1>
      <div className='my-16'>
        <form id="add-movie-form" onSubmit={handleSubmit}>
        <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="text" name="title" placeholder='Title' />
          </div>
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="text" name="director" placeholder='Director' />
          </div>
          {/* <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="text" name="genre" placeholder='Genre' />
          </div> */}
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="number" name="release_year" placeholder='Release Year' />
          </div>
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="number" name="rating" placeholder='Rating' />
          </div>
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="text" name="description" placeholder='Description' />
          </div>
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="text" name="image_url" placeholder='Image Url' />
          </div>
          <div className='mt-3'>
            <input className='bg-gray-300 p-4 w-full border border-black rounded-md' type="number" name="id" placeholder='Id' required />
          </div>
          <div className='mt-3 flex justify-center items-center'>
            <input className='btn bg-red-500 p-4 text-white w-full border border-black rounded-md' type="submit" value="Add Movie" />
          </div>
          
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-xl">
            <p className="text-lg font-semibold mb-4">Are you sure you want to add this movie?</p>
            <div className="flex justify-end">
              <button onClick={() => setShowConfirmModal(false)} className="btn bg-gray-500 mr-4">Cancel</button>
              <button onClick={handleConfirmAddMovie} className="btn bg-red-500">Add Movie</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};