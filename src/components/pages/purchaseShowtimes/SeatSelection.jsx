import { useState } from "react";
import SeatGrid from "./SeatGrid";
import { RiMovie2Fill } from "react-icons/ri";

import styles from "./SeatSelection.module.css";
import Button from "../../ui/Button";
import { useTicket } from "../../../features/tickets/useTicket";
import { useNavigate } from "react-router";
import { useToast } from "../../../contexts/ToastContext";

function SeatSelection({ seats, showtime }) {
  const navigate = useNavigate();
  const { addTicket, loading } = useTicket();
  const { notifySuccess, notifyError } = useToast();

  const [seatsSelected, setSeatsSelected] = useState([]);
  const totalPrice = showtime.price * seatsSelected.length;

  const seatLabels = seatsSelected
    .map((id) => {
      const seat = seats.find((s) => s._id === id);
      return seat ? `${seat.row}${seat.seatNumber}` : undefined;
    })
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  function handleSeatSelection(id) {
    setSeatsSelected((prev) => {
      const isSelected = prev.includes(id);

      if (isSelected) {
        const updated = prev.filter((s) => s !== id);
        return updated;
      }

      if (prev.length >= 5) return prev;

      const updated = [...prev, id];
      return updated;
    });
  }

  async function handleBuyTicket() {
    if (!seatsSelected || seatsSelected.length === 0 || !totalPrice) return;

    try {
      const res = await addTicket({
        showtime: showtime._id,
        seatIds: seatsSelected,
      });

      notifySuccess("¡Compra realizada con éxito! 💎");

      navigate(`/ticket/${res.payload.data.ticket._id}`);
    } catch (err) {
      notifyError("Algo ha salido mal, vuelva a intentarlo", err.message);
    }
  }
  return (
    <div>
      <section className={styles.heading}>
        <RiMovie2Fill />
        <h2>Selección de Asientos</h2>
      </section>

      <section className={styles.selectionContainer}>
        <h1>PANTALLA</h1>
        <SeatGrid
          seats={seats}
          onSeatSelection={handleSeatSelection}
          seatsSelected={seatsSelected}
        />

        <div className={styles.labels}>
          <div className={styles.label}>
            <div className={`${styles.squareIndicator} ${styles.available}`} />
            <p>Disponible</p>
          </div>
          <div className={styles.label}>
            <div className={`${styles.squareIndicator} ${styles.taken}`} />
            <p>Ocupado</p>
          </div>
          <div className={styles.label}>
            <div className={`${styles.squareIndicator} ${styles.selected}`} />
            <p>Tu elección</p>
          </div>
        </div>
      </section>

      <section className={styles.footerInfo}>
        <div className={styles.info}>
          <span>Asientos Seleccionados</span>
          <span>
            {seatLabels && seatLabels.join(", ")}
            {!seatLabels ||
              (seatLabels.length === 0 && "Ningun asiento seleccionado")}
          </span>
        </div>
        <div className={styles.info}>
          <span>Precio Total</span>
          <span>${totalPrice}</span>
        </div>

        <Button
          onClick={handleBuyTicket}
          disabled={loading || !seatsSelected || seatsSelected.length === 0}
        >
          Proceder al Pago
        </Button>
      </section>
    </div>
  );
}

export default SeatSelection;
