import { useEffect, useState } from "react";
import styles from "./TicketLayout.module.css";
import { useParams } from "react-router";
import axios from "axios";
import TicketCard from "../ui/TicketCard";

function TicketLayout() {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(
    function () {
      async function getTicket() {
        try {
          const res = await axios(`${API_URL}/api/v1/user/my-ticket/${id}`, {
            withCredentials: true,
          });
          setTicket(res.data.ticket);
        } catch (error) {
          console.error(error);
        }
      }

      getTicket();
    },
    [API_URL, id],
  );

  if (!ticket) return <h1>Np</h1>;

  return <TicketCard className={styles.ticketCard} ticket={ticket} />;
}

export default TicketLayout;
