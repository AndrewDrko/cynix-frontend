import { useNavigate, useSearchParams } from "react-router";
import { dateFormater } from "../../../utils";
import styles from "./DateTabs.module.css";
import { useEffect } from "react";

function DateTabs({ dates }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const queryDate = params.get("date");

  const handleClick = (date) => {
    navigate(`?date=${date}`);
  };

  const uniqueDates = [...new Set(dates.map((date) => date.split("T")[0]))]
    .sort()
    .filter((d, i) => (i < 5 ? d : null));

  useEffect(() => {
    if (!queryDate && uniqueDates.length > 0) {
      navigate(`?date=${uniqueDates[0]}`, { replace: true });
    }
  }, [queryDate, uniqueDates, navigate]);

  if (!dates) return <h1>No hay fechas</h1>;

  return (
    <div className={styles.datesTabContainer}>
      {uniqueDates.map((date) => (
        <button
          className={`${styles.tabButton} ${
            queryDate === date ? styles.selected : ""
          }`}
          onClick={() => handleClick(date)}
          key={date}
        >
          {dateFormater(date)}
        </button>
      ))}
    </div>
  );
}

export default DateTabs;
