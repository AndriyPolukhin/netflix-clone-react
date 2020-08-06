import React, { useState, useEffect } from 'react';
import axios from './axios';

import './row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // * A Snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // * Make a request to TMDB
    // * if [], run once when the row loads, and don't run again

    // * Runing  an async @fn in this hook
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    };
    // * call the @fn. Include the variable that you use in the async @fn to the dependency array
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${
              isLargeRow
                ? movie.poster_path
                : movie?.backdrop_path || movie?.poster_path
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
