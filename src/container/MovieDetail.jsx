import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/Logo.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

import Swal from "sweetalert2";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  useEffect(() => {
    if (movieId) {
      const getMovie = async () => {
        try {
          setLoadingDetail(true);
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=65423a090a9540d660ce4b48e926f7d5`
          );
          setMovieDetail(res.data);
        } catch (err) {
    
          setLoadingDetail(false);
          Swal.fire({
            icon: "error",
            text: "Error loading movies"
          })
        }
      };
      getMovie();
    }
  }, [movieId]);

  return (
    <>
      {!loadingDetail && movieDetail === null ? (
         <div className="flex flex-col justify-center content-center items-center h-screen">
         <div className="spinner"></div>
         <h2 className="mt-10"> Loading.....</h2>
       </div>
      ) : (
        <div className="h-full relative bg-transparent bg-gradient-to-r from-slate-700 to-slate-800">
          <div
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}')`,
            }}
            className={`absolute inset-0  opacity-75 mix-blend-overlay bg-no-repeat bg-cover bg-fixed`}
          ></div>
      
          <div>
            <header className="absolute inset-x-0 top-0 z-50">
              <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
              >
                <div className="flex lg:w-full md:w-full w-[115px]">
                  <div className="-m-1.5 p-1.5">
                    <img src={Logo} alt="octaedro" />
                  </div>
                </div>
              </nav>
            </header>
          </div>

          <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
            <div className="mx-auto pt-48 pb-[5rem] flex flex-col gap-[30px] h-full justify-end items-end">
              <div className="flex lg:flex-row  flex-col justify-start items-start gap-10">
                <div className="lg:flex-[.5] flex-col gap-4 flex">
                  <h2
                    className="text-white lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold"
                    data-testid="movie-title"
                  >
                    {movieDetail?.original_title}
                  </h2>
                  <div className="flex justify-start gap-[40px]">
                    <div className="flex justify-between gap-[20px]">
                      <span className="bg-yellow-400 px-[3px] font-semibold">
                        IMDb
                      </span>
                      <p className="text-white">{`${movieDetail?.vote_average} / 10`}</p>
                    </div>
                  </div>
                  <p
                    className="text-white text-lg"
                    data-testid="movie-overview"
                  >
                    {movieDetail?.overview}
                  </p>
                </div>
                <div className="flex-[.5] flex-col flex gap-4 justify-end items-end mt-auto w-full">
                  <div className="inline-flex items-center text-white gap-[10px]">
                    <p
                      className="text-base uppercase"
                      data-testid="movie-runtime"
                    >{`${movieDetail?.runtime}min`}</p>{" - "}
                    <p data-testid='movie-release-date'>{movieDetail?.release_date + "T00:00:00.000Z"}</p>
                  </div>
                  <div>
                    <a
                      href={movieDetail?.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center text-white uppercase bg-[#BE123C] py-[12px] px-8 rounded-md gap-4 font-semibold"
                    >
                      <BsFillPlayCircleFill />
                      watch trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
