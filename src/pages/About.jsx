import React from 'react'

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">About Us</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
      <p className="text-gray-700">
        At Film Fanatic, our mission is to provide movie enthusiasts with in-depth reviews, analysis, and recommendations on a wide range of films from various genres and eras. Whether you're a casual moviegoer or a hardcore cinephile, we aim to cater to your movie-watching needs by offering honest and unbiased critiques.
      </p>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
      <p className="text-gray-700">
        We are a team of passionate movie lovers who share a common love for cinema in all its forms. With diverse backgrounds and tastes, we come together to create a platform where fellow movie buffs can discover new films, engage in thought-provoking discussions, and celebrate the magic of storytelling through the medium of film.
      </p>
    </div>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Expert Reviews: Our team of experienced reviewers meticulously assess each film, providing insightful commentary on aspects such as direction, performances, cinematography, and more.</li>
        <li>Curated Recommendations: Looking for your next movie night pick? Browse through our curated lists and recommendations tailored to suit different moods, themes, and interests.</li>
        <li>Community Engagement: Join our vibrant community of film enthusiasts and participate in discussions, polls, and events. Share your own reviews and recommendations, and connect with like-minded individuals who share your passion for cinema.</li>
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-gray-700">
        Have a question, suggestion, or just want to say hello? We'd love to hear from you! Feel free to reach out to us via our contact page or connect with us on social media.
      </p>
    </div>
  </div>
  )
}
