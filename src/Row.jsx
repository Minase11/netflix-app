import axios from "./axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    width: "100%",
    height: 300,
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    //   movieTrailer(
    //     movie?.title || movie?.name || movie?.original_name || ""
    //   ).then((url) => {
    //     const urlParams = new URLSearchParams(new URL(url).search);
    //     setTrailerUrl(urlParams.get("v"));
    //     console.log(trailerUrl);
    //   });
    // }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            src={`${base_url}${
              isLarge ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt=""
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            onClick={handleClick(movie)}
          />
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>} */}
    </div>
  );
};

export default Row;
