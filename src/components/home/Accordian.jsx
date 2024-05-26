import React, { useState } from 'react'

export const Accordian = (movies) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const dummyReviewData = [
    {
      user: 'Alice',
      movie: 'Inception',
      rating: 5,
      review:
        'Inception is an absolute masterpiece! The storyline is mind-blowing, and the visuals are stunning. A must-watch for any movie enthusiast.',
    },
    {
      user: 'Bob',
      movie: 'The Shawshank Redemption',
      rating: 4,
      review:
        'The Shawshank Redemption is a timeless classic. The performances are outstanding, and the storytelling is gripping. Highly recommended.',
    },
    {
      user: 'Charlie',
      movie: 'The Dark Knight',
      rating: 5,
      review:
        'The Dark Knight is a thrilling ride from start to finish. Heath Ledger delivers an iconic performance as the Joker. One of the best superhero movies ever made.',
    },
  ];

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = dummyReviewData.map((review, index) => {
    const isActive = index === activeIndex;
    const iconClassName = isActive ? 'rotate-90' : 'rotate-0';

    return (
      <div key={index} className="flex flex-wrap mb-4 mt-5 ml-16">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => onTitleClick(index)}
        >
          <h2 className="text-xl font-semibold">{review.movie} - {review.user}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${iconClassName}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isActive ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <p className="text-gray-700 mt-2">
            <strong>Rating:</strong> {review.rating}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Review:</strong> {review.review}
          </p>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col">{renderedItems}</div>;
};