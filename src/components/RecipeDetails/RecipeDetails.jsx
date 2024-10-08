import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // React icon for cross
import "./RecipeDetails.css";

const Star = ({ filled }) => {
  return (
    <span className={filled ? "star filled" : "star"}>
      {filled ? "★" : "☆"} {/* Full star for filled, empty star for unfilled */}
    </span>
  );
};

const RecipeDetails = ({ recipe, closeModal }) => {
  const { image, name, rating, cuisine, ingredients, instructions } = recipe;

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} filled={i < rating} />);
    }
    return stars;
  };

  return (
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="modal-container relative bg-custom-green rounded-lg p-6 max-w-4xl w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-hidden">
        {/* Fixed image and close button container */}
        <button
          className="close-button text-white hover:text-red-600"
          onClick={closeModal}
        >
          <FaTimes size={24} />
        </button>
        <div className="fixed-header">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded" // Change to full height
          />
        </div>

        {/* Scrollable content */}
        <div className="scrollable-content mt-4">
          <h1 className="text-white text-3xl">{name}</h1>
          <p className="text-gray-400">{cuisine}</p>
          <p className="text-white">Rating: {renderStars(rating)}</p> {/* Render stars here */}
          <h3 className="text-white text-xl mt-4">Ingredients:</h3>
          <ul className="text-white list-disc ml-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-white text-xl mt-4">Instructions:</h3>
          <p className="text-white">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;