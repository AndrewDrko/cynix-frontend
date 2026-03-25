import { useDispatch, useSelector } from "react-redux";
import { createTicket, fetchMyTickets } from "./ticketSlice";
import { useEffect } from "react";

export function useTicket() {
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.tickets);

  const addTicket = (ticketData) => dispatch(createTicket(ticketData));

  useEffect(() => {
    dispatch(fetchMyTickets());
  }, [dispatch]);

  return {
    tickets,
    loading,
    error,
    addTicket,
  };
}
