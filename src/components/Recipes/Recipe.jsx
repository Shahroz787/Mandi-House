import React, { useState } from "react";
import { useQuery } from "react-query";
import { HiChat } from "react-icons/hi";
import { Link } from "react-router-dom";
import Item from "../../pages/item/Items";

const fetchRecipes = async (search) => {
  const response = await fetch(
    `https://dummyjson.com/recipes/search?q=${search}`
  );
  return await response.json();
};

const Recipe = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", search],
    queryFn: () => fetchRecipes(search),
    keepPreviousData: true,
  });

  if (isError)
    return <h1 className="text-center my-20 text-3xl">something went wrong</h1>;
  console.log("data>--", data);

  return (
    <>
      <Item />
      <div className="container px-3 py-4 mx-auto">
        <h1 className="text-white text-center text-2xl sm:text-3xl sm:p-8 p-7 font-medium">
          Delicious Recipes
        </h1>

        <div className="relative w-full">
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Search for item by title..."
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900
 rounded-full border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pr-10" // note 'pr-10' for right padding
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <HiChat className="text-2xl mr-2 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {isLoading && (
          <h1 className="text-center text-white p-10 text-3xl">Loading...</h1>
        )}

        <div className="flex flex-wrap -m-4 mt-4">
          {data?.recipes?.map((Recipe) => {
            const { image, id, name, rating, cuisine } = Recipe;
            return (
              <Link
                key={id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full no-underline"
                to={`/${id}`}
              >
                <a className="block relative h-48 rounded overflow-hidden ">
                  <img
                    alt="ecommerce"
                    className="rounded-lg object-cover object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4 ">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {cuisine}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {name}
                  </h2>
                  <p className="text-yellow-400">RATING {rating}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recipe;
