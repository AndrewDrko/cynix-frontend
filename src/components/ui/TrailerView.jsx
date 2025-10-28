import { useState } from "react";
import styles from "./TrailerView.module.css";
import Spinner from "../ui/Spinner";

function TrailerView({ url, name }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.trailerContainer}>
      <h1>Trailer - {name}</h1>

      {loading && <Spinner />}

      <iframe
        className={styles.iframe}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setLoading(false)} // <- se dispara cuando termina de cargar
        style={{ display: loading ? "none" : "block" }} // oculta iframe mientras carga
      ></iframe>
    </div>
  );
}

export default TrailerView;
