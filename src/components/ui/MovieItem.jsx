import styles from "./MovieItem.module.css";

function MovieItem({ image, title }) {
  return (
    <img
      className={styles.movieItem}
      alt={title}
      draggable={false}
      src={image}
    />
  );
}

export default MovieItem;
