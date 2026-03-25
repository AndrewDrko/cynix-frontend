import styles from "./TicketCard.module.css";
import { dateFormater, timeFormater } from "../../utils";

function TicketCard({ ticket }) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  return (
    <div className={styles.ticketCardContainer}>
      <div
        className={`${styles.infoSection} ${styles.movieHeader}`}
        style={{
          backgroundImage: `url(${API_URL}${ticket.showtimeSnapshot.bannerUrl})`,
        }}
      >
        <h2>PELICULA</h2>
        <h1>{ticket.showtimeSnapshot.movieTitle}</h1>
      </div>

      <section className={`${styles.infoSection} ${styles.cinemaInfo}`}>
        <h2>CINE</h2>
        <h1>{ticket.showtimeSnapshot.theater.title}</h1>
        <p>{ticket.showtimeSnapshot.theater.address}</p>
      </section>

      <section className={styles.infoSection}>
        <h2>SALA</h2>
        <h1>{ticket.showtimeSnapshot.screen.name}</h1>
      </section>

      <section className={styles.infoSection}>
        <h2>FECHA Y HORA</h2>
        <h1>
          {dateFormater(ticket.showtimeSnapshot.dateTime)} -{" "}
          {timeFormater(ticket.showtimeSnapshot.dateTime)}
        </h1>
      </section>

      <section className={styles.infoSection}>
        <h2>ASIENTOS</h2>
        <h1>
          {ticket.seatsSnapshot
            .map((seat) => `${seat.row}${seat.seatNumber}`)
            .join(", ")}
        </h1>
      </section>

      <section className={styles.infoSection}>
        <h2>TOTAL PAGADO</h2>
        <h1>${ticket.pricePaid.toFixed(2)}</h1>
      </section>

      <section className={`${styles.infoSection} ${styles.orderInfo}`}>
        <h2>NÚMERO DE ORDEN: </h2>
        <h1>{ticket.orderNumber}</h1>
        <img
          className={styles.qrImg}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
          alt="QR image example"
        />
        <span>Escanea este código en la entrada de la sala</span>
      </section>
    </div>
  );
}

export default TicketCard;
