import styles from "./MovieCard.module.css";

function MovieCard({
  title,
  posterUrl,
  synopsis,
  genre,
  classification,
  duration,
  className,
}) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  return (
    <div className={`${styles.movieCard} ${className}`}>
      <img
        src={`${API_URL}${posterUrl}`}
        alt={title}
        className={styles.movieImage}
      />
      <div className={styles.movieInfo}>
        <div>
          <span>{classification} | </span>
          <span>{duration} mins | </span>
          <span>{genre.replace("/", ",")}</span>
        </div>
        <h2>{title}</h2>
        <p>{synopsis}</p>
      </div>
    </div>
  );
}

export default MovieCard;
