import { useNavigate } from "react-router";
import { dateFormater, timeFormater } from "../../utils";
import styles from "./TicketItem.module.css";

function TicketItem({
  id,
  title,
  date,
  screen,
  posterUrl,
  purchaseDate,
  theater,
}) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;
  const navigate = useNavigate();

  return (
    <li className={styles.ticketItem} onClick={() => navigate(`/ticket/${id}`)}>
      <div className={styles.posterContainer}>
        <img
          src={`${API_URL}${posterUrl}`}
          alt={title}
          className={styles.movieImage}
        />
      </div>
      <div className={styles.ticketInfo}>
        <h2>{title}</h2>
        <h3>{theater}</h3>
        <span>
          {dateFormater(date)} - {timeFormater(date)} - {screen}
        </span>
        <span>Fecha de Compra: {dateFormater(purchaseDate, true)}</span>
      </div>
    </li>
  );
}

export default TicketItem;
