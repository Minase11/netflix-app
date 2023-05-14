import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str?.substring(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="banner__container">
        <h1 className="banner__title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div>
          <button className="banner__button">play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
