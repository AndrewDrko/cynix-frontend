import { useState } from "react";
import { usePreferences } from "../../features/preferences/usePreferences";

import styles from "./TheaterItem.module.css";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

function TheaterItem({ id, name, selectable = true, className }) {
  const {
    selectedCinema,
    favoriteCinemas,
    handleSelectCinema,
    handleToggleFavorite,
  } = usePreferences();
  const isSelected = id === selectedCinema;
  const isFavorite = favoriteCinemas.includes(id);

  const [hover, setHover] = useState(false);

  return (
    <li
      className={`${styles.theaterItem} ${selectable && isSelected ? styles.selected : ""} ${className}`}
      onClick={() => handleSelectCinema(id)}
    >
      <h2>{name}</h2>

      <button
        className={styles.favoriteBtn}
        onClick={(e) => {
          e.stopPropagation();
          handleToggleFavorite(id);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isFavorite && <HiHeart className={styles.fullHeartSelected} />}
        {!isFavorite && hover && <HiHeart />}
        {!isFavorite && !hover && <HiOutlineHeart />}
      </button>
    </li>
  );
}

export default TheaterItem;
