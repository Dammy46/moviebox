import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="flex flex-col max-w-[300px]" data-testid="movie-card">
      <Link to={`/movies/${id}`} className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          data-testid="movie-poster"
        />
        <div
          onClick={(e) => {
            e.preventDefault();
            setFavorite(!favorite);
          }}
          className="absolute h-[30px] w-[30px] bg-white opacity-25 top-0 right-0 mr-3 mt-4 flex justify-center items-center rounded-full hover:opacity-100"
        >
          <AiFillHeart height={"100%"} color={favorite ? "red" : "gray"} />
        </div>
      </Link>
      <div className="flex flex-col py-[.5rem] gap-4">
        <h3
          className="text-xl font-semibold capitalize"
          data-testid="movie-title"
        >
          {title}
        </h3>
        <div className="flex justify-between gap-[20px]">
          <span className="bg-yellow-400 px-[3px] font-semibold text-base">
            IMDb
          </span>
          <p className="text-base">{`${vote_average} / 10`}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base capitalize">release date</p>
          <p className="text-base " data-testid="movie-release-date">
            {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
