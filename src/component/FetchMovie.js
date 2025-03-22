import { useState, useEffect } from "react";

const FetchMovie = () => {
  const API =
    "https://api.themoviedb.org/3/movie/popular?api_key=ad99fe54e262f888c08925483eeeab9a";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // setLoading(true);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error...", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>FetchMovie</h2>
      {loading ? <p>Loading...</p> : null}

      {!loading && movies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
    </div>
  );
};

export default FetchMovie;
