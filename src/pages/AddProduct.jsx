import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    director: '',
    genre: '',
    release_year: '',
    rating: '',
    description: '',
    image_url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      genre: formData.genre.split(',').map(genre => genre.trim())
    };

    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success('Movie added successfully!');
        setFormData({
          id: '',
          title: '',
          director: '',
          genre: '',
          release_year: '',
          rating: '',
          description: '',
          image_url: ''
        });
      } else {
        throw new Error('Failed to add movie.');
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      toast.error('Failed to add movie.');
    }
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="input" required />
          <input type="text" name="director" value={formData.director} onChange={handleChange} placeholder="Director" className="input" required />
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre (comma-separated)" className="input" required />
          <input type="number" name="release_year" value={formData.release_year} onChange={handleChange} placeholder="Release Year" className="input" required />
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="input" required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input" required />
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image Url" className="input" required />
          <input type="number" name="id" value={formData.id} onChange={handleChange} placeholder="Id" className="input" required />
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="btn bg-red-500 text-white px-6 py-3 rounded-md">Add Movie</button>
        </div>
      </form>
    </div>
  );
};
