import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const ProductDetails = () => {
  const movie = useLoaderData();
  const { id, title, director, genre, description, release_year, rating, image_url, reviews } = movie;
  console.log(movie);

  return (
    <>
  <div className="container mx-auto px-6 py-12">
  <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
  <div className="flex justify-center mb-12">
    <img className="h-auto w-96" src={image_url} alt={title} />
  </div>
  <div className="text-center mb-12">
    <h2 className="text-xl font-semibold">Director: {director}</h2>
    <h2 className="text-xl font-semibold mt-2">Genre: {genre.join(', ')}</h2>
    <h2 className="text-xl font-semibold mt-2">Release Year: {release_year}</h2>
    <h2 className="text-xl font-semibold mt-2">Rating: {rating}</h2>
    <p className="text-lg mt-4">{description}</p>
  </div>
  <div className="mt-12">
    <h2 className="text-3xl font-bold mb-4">Reviews</h2>
    {reviews.map((review, index) => (
      <div key={index} className="border border-gray-300 rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold">{review.username} says:</h3>
        <div className="flex items-center mt-2">
          <h3 className="text-xl font-semibold mr-2">Rating:</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-lg mt-2">{review.review}</p>
      </div>
    ))}
  </div>
</div>

  </>
  );
};
