import TicketItem from "./TicketItem";
import styles from "./TicketList.module.css";

function TicketList({ tickets }) {
  const ticketsPerDate = [...tickets].sort(
    (a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate),
  );

  return (
    <ul className={styles.ticketList}>
      {ticketsPerDate.map((ticket) => (
        <TicketItem
          id={ticket._id}
          key={ticket._id}
          title={ticket.showtimeSnapshot.movieTitle}
          posterUrl={ticket.showtimeSnapshot.posterUrl}
          date={ticket.showtimeSnapshot.dateTime}
          screen={ticket.showtimeSnapshot.screen.name}
          purchaseDate={ticket.purchaseDate}
          theater={ticket.showtimeSnapshot.theater.title}
        />
      ))}
      <h3>{tickets.length === 0 && "No hay tickets"}</h3>
    </ul>
  );
}

export default TicketList;
