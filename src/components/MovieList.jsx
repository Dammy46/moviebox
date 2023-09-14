import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesList, loadingList }) => {

  const firstTenItems = moviesList?.slice(0, 10);
  return (
    <div id="list" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto py-[5rem`] flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <h3 className="capitalize font-semibold text-[1.7rem]">
            featured movie
          </h3>
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
