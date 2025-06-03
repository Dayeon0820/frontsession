import { use, useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year "
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setloading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log("movies:", movies);

  return (
    <>
      {loading ? (
        <h1>Loading. . .</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <img src={movie.medium_cover_image} />
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
