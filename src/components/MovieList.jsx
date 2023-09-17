import React from "react";
import MovieCard from "./MovieCard";
import { BsSearch } from "react-icons/bs";

const MovieList = ({ moviesList, loadingList, handleChange }) => {

  const firstTenItems = moviesList?.slice(0, 10);
  return (
    <div id="list" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto py-[5rem`] flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <h3 className="capitalize font-semibold text-[1.7rem] lg:block md:block hidden flex-1">
            featured movie
          </h3>
          <div className="py-2 px-4 border rounded-md  w-full flex items-center flex-1">
                <input
                  type="text"
                  className="bg-inherit w-full focus:outline-none focus:ring-0 "
                  placeholder="What do you want to watch?"
                  onChange={handleChange}
                />
                <BsSearch />
              </div>
        </div>

        {loadingList ? (
          <div className="flex flex-col justify-center content-center items-center">
            <div className="spinner"></div>
            <h2 className="mt-10"> Loading.....</h2>
          </div>
        ): (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center items-center gap-4">
            {firstTenItems?.map((item, index) => (
              <MovieCard item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
