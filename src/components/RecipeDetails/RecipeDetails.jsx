import React from "react";
import "./RecipeDetails.css";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import "./RecipeDetails.css";

const fetchrecipeDetails = async (id) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  return await response.json();
};

const RecipeDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", id],
    queryFn: () => fetchrecipeDetails(id),
  });
  console.log("data-->", data);

  if (isLoading)
    return <h1 className="text-center text-white p-10 text-3xl">Loading...</h1>;

  if (isError)
    return (
      <h1 className="text-center my-20 text-3xl m">something went wrong</h1>
    );

  const {
    image,
    name,
    rating,
    cuisine,
    ingredients,
    cookTimeMinutes,
    instructions,
    tags,
  } = data;

  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full sm:h-56 lg:h-2/5 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {cuisine}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-green-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-3">Rating {rating}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>

            <div>
              <h1 className="text-white text-lg title-font font-medium mb-2">
                Ingredients
              </h1>
              <ol className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-1">
                {ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="text-sm mb-[-3] list">
                      {ingredient}
                    </li>
                  );
                })}
              </ol>
            </div>

            <div>
              <h1 className="text-white text-lg title-font font-medium mb-1">
                Instructions
              </h1>
              {instructions.map((inst, index) => {
                return (
                  <p key={index} className="leading-relaxed mb-1">
                    {inst}
                  </p>
                );
              })}
            </div>
            <div className="flex mt-6 items-center pb-4 border-b-2 border-gray-800 mb-4">
              <div>
                <h1 className="text-white text-lg title-font font-medium mb-2">
                  Special Name
                </h1>
                <ol className="flex gap-3">
                  {tags.map((tag, index) => {
                    return (
                      <li key={index} className="text-sm">
                        {tag}
                        {index !== tags.length - 1 && ","}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
