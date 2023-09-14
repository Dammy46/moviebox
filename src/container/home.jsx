import React, { useEffect, useState } from "react";
import { Footer, Header, MovieList } from "../components";
import axios from "axios";
import Swal from 'sweetalert2'

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [search, setSearch] = useState('')
  const fetchMovies = async () => {
    try {
      setLoadingList(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=65423a090a9540d660ce4b48e926f7d5`
      );

      setMoviesList([...moviesList, res.data.results]);
      setLoadingList(false);
    } catch (err) {
      setLoadingList(false);
      console.log(err, "error");
      Swal.fire({
        icon: "error",
        text: "Error loading movies"
      })
    }
  };
  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  const filterMovie = moviesList[0]?.filter((movie) => {
    
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })
  useEffect(() => {
    fetchMovies();

  }, []);

  return (
    <>
    
      <Header  handleChange={handleChange}/>
        <MovieList moviesList={filterMovie} loadingList={loadingList}/>

        <Footer />
  
    </>
  );
};

export default Home;
