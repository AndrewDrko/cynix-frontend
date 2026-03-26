import { IoTicket } from "react-icons/io5";
import styles from "./TicketsCard.module.css";
import TicketList from "../../ui/TicketList";

function TicketsCard({ className, tickets }) {
  return (
    <div className={`${styles.ticketCard} ${className}`}>
      <span className={styles.titleContainer}>
        <IoTicket />
        <h2>Mis Tickets</h2>
      </span>
      <TicketList tickets={tickets} />
    </div>
  );
}

export default TicketsCard;
