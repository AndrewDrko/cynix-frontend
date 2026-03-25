import { useEffect, useState } from "react";
import SeatSelection from "../pages/purchaseShowtimes/SeatSelection";
import ShowtimeAside from "../pages/purchaseShowtimes/ShowtimeAside";
import styles from "./PurchaseLayout.module.css";
import { useParams } from "react-router";
import axios from "axios";
import Spinner from "../ui/Spinner";

function PurchaseLayout() {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;
  const { id } = useParams();
  const [seats, setSeats] = useState([]);
  const [showtime, setShowtime] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(
    function () {
      async function getShowtimeSeats() {
        try {
          const res = await axios(`${API_URL}/api/v1/seat/${id}/seats`, {
            withCredentials: true,
          });
          setSeats(res.data.data.seats);
          setShowtime(res.data.data.showtime);
          setMovie(res.data.data.showtime.movie);
        } catch (error) {
          console.error(error);
        }
      }
      getShowtimeSeats();
    },
    [id, API_URL],
  );

  if (!seats || !showtime) return <Spinner />;

  return (
    <div className={styles.layout}>
      <SeatSelection seats={seats} showtime={showtime} movie={movie} />
      <ShowtimeAside showtime={showtime} />
    </div>
  );
}

export default PurchaseLayout;
