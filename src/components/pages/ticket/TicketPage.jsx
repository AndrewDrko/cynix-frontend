import Header from "../../layout/Header";
import TicketLayout from "../../layout/TicketLayout";
import styles from "./TicketPage.module.css";

function TicketPage() {
  return (
    <div className={styles.ticketPage}>
      <Header darkMode={true} />
      <TicketLayout className={styles.ticket} />
    </div>
  );
}

export default TicketPage;
