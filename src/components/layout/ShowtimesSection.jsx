import styles from "./ShowtimesSection.module.css";
import CinemaSelectorButton from "../ui/CinemaSelectorButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";
import MovieItem from "../ui/MovieItem";
import AnimatedList from "../ui/AnimatedList";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

function ShowtimesSection() {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    async function getMovies() {
      const res = await fetch(`${API_URL}/api/v1/movie`);
      const data = await res.json();
      setMovies(data.data.movies);
    }
    getMovies();
  }, []);

  return (
    <section className={styles.showtimesSection}>
      <h1>Cartelera</h1>
      <CinemaSelectorButton type="secondary" />

      <h2>Todas las películas</h2>
      <Carousel
        style={{ userSelect: "none", backgroundColor: "#c71e1e3a" }}
        responsive={responsive}
        draggable={true}
        swipeable={false}
      >
        {!movies || movies.length === 0 ? (
          <h2>No hay películas para mostrar :C</h2>
        ) : (
          movies.map((movie) => (
            <MovieItem
              title={movie.title}
              image={`${API_URL}${movie.posterUrl}`}
              key={movie.title}
            />
          ))
        )}
      </Carousel>
    </section>
  );
}

export default ShowtimesSection;
