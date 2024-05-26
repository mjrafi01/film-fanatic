import React from 'react';
import useAuth from '../hooks/userAuth';

export const Dashboard = () => {
  const { user } = useAuth();

  // Dummy movie reviews
  const movieReviews = [
    { movie: "The Shawshank Redemption", rating: 5, review: "A masterpiece! One of the best movies ever made." },
    { movie: "The Godfather", rating: 5, review: "Absolutely brilliant. A classic that stands the test of time." },
    { movie: "The Dark Knight", rating: 4, review: "An excellent superhero movie with a dark and gripping storyline." }
  ];

  // Dummy user ratings
  const userRatings = [
    { movie: "Inception", rating: 4 },
    { movie: "Pulp Fiction", rating: 5 },
    { movie: "Fight Club", rating: 4 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center">
        <div className="rounded-full overflow-hidden w-16 h-16 flex-shrink-0 mr-4">
          <img className="w-full h-full object-cover" src={user?.photoURL || "/public/placeholder.jpg"} alt="Profile" />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome, {user.displayName}!</h2>
          <p className="text-gray-700">
            You are currently logged in as <span className="font-semibold">{user.email}</span>.
          </p>
          <p className="text-gray-700">
            Account created on: <span className="font-semibold">{new Date(user.createdAt).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Movie Reviews</h2>
        {movieReviews.map((review, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-1">{review.movie}</h3>
            <p className="text-gray-700 mb-1">Rating: {review.rating}/5</p>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Ratings</h2>
        {userRatings.map((rating, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-1">{rating.movie}</h3>
            <p className="text-gray-700 mb-1">Your Rating: {rating.rating}/5</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="mb-4">
          <p className="text-gray-700">
            To update your account information or change your password, please visit the <span className="font-semibold">Account Settings</span> page.
          </p>
        </div>
        <div>
          <button className="btn btn-primary">Account Settings</button>
        </div>
      </div>
    </div>
  );
};
