import styles from "./SearchBar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import Button from "./Button";

function SearchBar({ className = "", placeholder = "" }) {
  return (
    <div className={`${styles.searchBarContainer} ${className}`}>
      <div className={styles.search}>
        <BiSearchAlt />
        <input
          className={styles.inputField}
          type="text"
          placeholder={placeholder}
        />
      </div>
      {/* <Button className={styles.filterOptionsBtn}>
        <IoIosOptions />
      </Button> */}
    </div>
  );
}

export default SearchBar;
