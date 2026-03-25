import { Link, useParams } from "react-router";
import styles from "./Movie.module.css";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import TrailerView from "../../ui/TrailerView";
import { BsTicketPerforated } from "react-icons/bs";
import Tag from "../../ui/Tag";

function Movie() {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function getMovie() {
        const res = await fetch(`${API_URL}/api/v1/movie/${id}`);
        const data = await res.json();

        setMovie(data.data.movie);
      }
      getMovie();
    },
    [API_URL, id],
  );

  if (!movie) return <p>Not movies</p>;

  const genreArr = movie.genre.split("/");

  return (
    <div className={styles.layout}>
      {movie && (
        <>
          <section
            className={styles.mainSection}
            style={{
              backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.76), rgba(0, 0, 0, 0.849)), url(${API_URL}${movie.bannerUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // aspectRatio: "16 / 9",
            }}
          >
            <img
              src={`${API_URL}${movie.posterUrl}`}
              className={styles.poster}
            />
            <div className={styles.primaryInfo}>
              <h1>{movie.title}</h1>
              <div className={styles.specifications}>
                <span>{movie.year}</span>
                <span>&#8226;</span>
                <span>{movie.duration} mins</span>
                <span>&#8226;</span>
                <Tag>{movie.classification}</Tag>
              </div>

              <ul className={styles.genresList}>
                {genreArr.map((g) => (
                  <li key={g}>
                    <Tag type="secondary">{g.trim()}</Tag>
                  </li>
                ))}
              </ul>

              <p>{movie.synopsis}</p>

              <Link to={`/movies/${id}/showtimes`}>
                <Button type="tertiary" className={styles.button}>
                  <BsTicketPerforated />
                  Ver Funciones
                </Button>
              </Link>
            </div>
          </section>

          <section className={styles.secondarySection}>
            <div>
              <div className={styles.divition}>
                <h2>Detalles</h2>
              </div>
              <div className={styles.divition}>
                <h3>Director(es)</h3>
                <span>{movie.directors.join(", ")}</span>
              </div>
              <div className={styles.divition}>
                <h3>Rating</h3>
                <span>⭐ {movie.rating} / 5</span>
              </div>
              <div className={styles.divition}>
                <h3>Reparto</h3>
                <span>{movie.actors.join(", ")}</span>
              </div>
            </div>
            <div className={styles.trailer}>
              <h2>Trailer</h2>
              <TrailerView url={movie.trailerUrl} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Movie;
