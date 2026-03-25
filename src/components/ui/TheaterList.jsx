import TheaterItem from "./TheaterItem";
import styles from "./TheaterList.module.css";

function TheaterList({ theaters, selectable, className = "" }) {
  return (
    <ul className={`${styles.theaterList} ${className}`}>
      {theaters.map((theater) => (
        <TheaterItem
          id={theater._id}
          name={theater.name}
          key={theater.name}
          selectable={selectable}
        />
      ))}
    </ul>
  );
}

export default TheaterList;
