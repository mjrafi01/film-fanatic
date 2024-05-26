import React from 'react'
import { json, useLoaderData } from 'react-router-dom';
import { useState } from "react";

export const EditProduct = () => {
  const movie = useLoaderData();
  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [genre, setGenre] = useState(Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre || '');
  const [id, setId] = useState(movie.id);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(movie.release_year);
  const [rating, setRating] = useState(movie.rating);
  const [imageUrl, setImageURL] = useState(movie.image_url);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirmation(false); // Close the confirmation modal

    const updatedMovie = {
      id,
      title,
      director,
      genre: genre.split(',').map((g) => g.trim()),
      description,
      release_year: releaseYear,
      rating,
      image_url: imageUrl
    };

    try {
      const response = await fetch(`http://localhost:3000/movies/${movie.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMovie)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Product updated successfully!');
      } else {
        throw new Error('Failed to update the product');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while updating the product.');
    }
  };

  return (
    <>
      <h1 className='text-5xl font-extrabold text-center'>Edit Product</h1>
      <div className='my-16'>
        <form onSubmit={(e) => { e.preventDefault(); setShowConfirmation(true); }}>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="text"
              name="title"
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="text"
              name="director"
              placeholder='Director'
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="text"
              name="genre"
              placeholder='Genre'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="number"
              name="release_year"
              placeholder='Release Year'
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="number"
              name="rating"
              placeholder='Rating'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="text"
              name="description"
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="text"
              name="image_url"
              placeholder='Image URL'
              value={imageUrl}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className='mt-3'>
            <input
              className='bg-gray-300 p-4 w-full border border-black rounded-md'
              type="number"
              name="id"
              placeholder='ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className='mt-3 flex justify-center items-center'>
            <input className='btn bg-red-500 p-4 text-white w-full border border-black rounded-md' type="submit" value="Update Product" />
          </div>
        </form>
      </div>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-xl">
            <p className="text-lg font-semibold mb-4">Are you sure you want to update this product?</p>
            <div className="flex justify-end">
              <button onClick={() => setShowConfirmation(false)} className="btn mr-4">Cancel</button>
              <button onClick={handleSubmit} className="btn bg-red-500">Update</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};