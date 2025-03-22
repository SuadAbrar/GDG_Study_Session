import axios from "axios";
import { useEffect, useState } from "react";

const MovieWatchlist = () => {
  const API =
    "https://api.themoviedb.org/3/movie/popular?api_key=ad99fe54e262f888c08925483eeeab9a";
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // useEffect(() => {
  //   fetch(API)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // }, []);

  useEffect(() => {
    axios.get(API).then((response) => setMovies(response.data.results));
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div>
      <h2>Movie Watchlist</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="150"
            />
            <br />
            <button onClick={() => addToWatchlist(movie)}>
              Add to Watchlist page
            </button>
          </li>
        ))}
      </ul>

      {/* the watchlist page */}
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No added movies</p>
      ) : (
        <ul>
          {/* <li key={movie.id}> */}
          {watchlist.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width="100"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieWatchlist;
