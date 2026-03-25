import { useState } from "react";
import styles from "./TrailerView.module.css";
import Spinner from "../ui/Spinner";

function TrailerView({ url, name, showTitle = false, className = "" }) {
  const newUrl = url.replace("watch?v=", "embed/");
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${styles.trailerContainer} ${className}`}>
      {showTitle && <h1>Trailer - {name}</h1>}

      {loading && <Spinner />}

      <iframe
        className={styles.iframe}
        src={newUrl}
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
