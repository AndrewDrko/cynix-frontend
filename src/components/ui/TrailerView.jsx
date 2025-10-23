import styles from "./TrailerView.module.css";

function TrailerView({ url }) {
  return (
    <div className={styles.trailerContainer}>
      <h1>Trailer</h1>
      <iframe
        className={styles.iframe}
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default TrailerView;
