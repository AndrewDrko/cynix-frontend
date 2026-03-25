import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  const [allMovies, setAllMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getAllMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(`${API_URL}/api/v1/movie`);
          const data = await res.json();
          setAllMovies(data.data.movies);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      getAllMovies();
    },
    [API_URL]
  );

  return (
    <MoviesContext.Provider value={{ allMovies, setAllMovies, isLoading }}>
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
}

export { MoviesProvider, useMovies };
