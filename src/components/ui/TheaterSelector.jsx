import { HiOutlineHeart, HiX } from "react-icons/hi";
import styles from "./TheaterSelector.module.css";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function TheaterSelector() {
  const [theaters, setTheaters] = useState([]);
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  useEffect(
    function () {
      const getTheaters = async function () {
        try {
          const res = await fetch(`${API_URL}/api/v1/theater`);
          const data = await res.json();

          setTheaters(data.data.theaters);
        } catch (error) {
          console.error(error);
        }
      };
      getTheaters();
    },
    [API_URL]
  );

  return (
    <div className={styles.container}>
      <h2>Seleccionar cine</h2>
      <SearchBar placeholder="Buscar cine" className={styles.modalSearchBar} />
      <TheaterList theaters={theaters} />
    </div>
  );
}

function TheaterList({ theaters }) {
  return (
    <ul className={styles.theaterList}>
      {theaters.map((theater) => (
        <TheaterItem name={theater.name} key={theater.name} />
      ))}
    </ul>
  );
}

function TheaterItem({ name }) {
  return (
    <li className={styles.theaterItem}>
      <h2>{name}</h2>
      <HiOutlineHeart />
    </li>
  );
}

export default TheaterSelector;
