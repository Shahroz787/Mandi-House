import React, { useState } from "react";
import { useQuery } from "react-query";
import { HiChat } from "react-icons/hi";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./Recipe.css";
import Items from "../../pages/item/Items";

const fetchRecipes = async (search) => {
  const response = await fetch(
    `https://dummyjson.com/recipes/search?q=${search}`
  );
  return await response.json();
};

const Recipe = () => {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", search],
    queryFn: () => fetchRecipes(search),
    keepPreviousData: true,
  });

  if (isError)
    return <h1 className="text-center my-20 text-3xl">Something went wrong</h1>;
  console.log("data-->", data);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <Items />
      <div className="container px-3 py-4 mx-auto">
        <h1 className="text-white text-center text-2xl sm:text-3xl sm:p-8 p-7 font-medium">
          Delicious Recipes
        </h1>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for item by title..."
            className="w-full bg-gray-600 bg-opacity-20 rounded-full border text-gray-100 py-1 px-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <HiChat className="text-2xl mr-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {isLoading && (
          <h1 className="text-center text-white p-10 text-3xl">Loading...</h1>
        )}

        <div className="flex flex-wrap -m-4 mt-4">
          {data?.recipes?.map((recipe) => {
            const { image, id, name, rating, cuisine } = recipe;
            return (
              <div
                key={id}
                className="cursor-pointer lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <div className="recipe-item block relative h-auto rounded overflow-hidden bg-green-900">
                  {/* Display the first image in the array */}
                  <img
                    alt={name}
                    className="rounded-lg object-cover w-full h-48"
                    src={image}
                  />

                  {/* "View Details" Button */}
                  <button
                    className="view-details-btn absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-lime-800 text-white px-3 py-1 rounded-lg"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    View Details
                  </button>
                </div>

                <div className="mt-4 p-2">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {cuisine}
                  </h3>
                  <h2 className="text-white text-lg font-medium">{name}</h2>
                  <p className="text-yellow-400">RATING {rating}</p>
                </div>
              </div>
            );
          })}
        </div>

        {showModal && selectedRecipe && (
          <div className={`modal-overlay ${showModal ? "active" : ""}`}>
            <RecipeDetails recipe={selectedRecipe} closeModal={closeModal} />
          </div>
        )}
      </div>
    </>
  );
};

export default Recipe;
