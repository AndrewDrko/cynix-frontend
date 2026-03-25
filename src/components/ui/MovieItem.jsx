import { Link } from "react-router";
import styles from "./MovieItem.module.css";
import Tag from "./Tag";

function MovieItem({
  className = "",
  image,
  title,
  borderRounded = false,
  showInfo = false,
  classification,
  duration,
  genre,
  id,
}) {
  if (showInfo)
    return (
      <div className={`${styles.movieItem} ${className}`}>
        <Link to={`${id}`} className={styles.movieLink}>
          <img
            className={`${styles.moviePoster}`}
            style={borderRounded ? { borderRadius: "9px" } : {}}
            alt={title}
            draggable={false}
            src={image}
          />
        </Link>
        <div className={styles.infoContainer}>
          <h2>{title}</h2>
          <Tag>{classification}</Tag>
          <span className={styles.right}>{duration} mins</span>
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    );

  return (
    <div className={`${styles.movieItem} ${className}`}>
      <Link to={`movies/${id}`} className={styles.movieLink}>
        <img
          className={`${styles.moviePoster}`}
          style={borderRounded ? { borderRadius: "9px" } : {}}
          alt={title}
          draggable={false}
          src={image}
        />
      </Link>
    </div>
  );
}

export default MovieItem;
