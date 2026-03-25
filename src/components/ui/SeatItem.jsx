import { useState } from "react";
import styles from "./SeatItem.module.css";

function SeatItem({
  id,
  seatStatus,
  row,
  num,
  onSeatSelection,
  seatsSelected,
}) {
  const [isSelected, setIsSelected] = useState(false);

  let seatState;
  if (seatStatus === true) seatState = "available";
  if (seatStatus === false) seatState = "taken";

  function handleToggleSelection(id) {
    if (seatState === "taken") return;

    const isAlreadySelected = seatsSelected.includes(id);

    if (isAlreadySelected) {
      setIsSelected(false);
      onSeatSelection(id);
      return;
    }

    // PENDING USING TOAST FOR ADVICE MAX SEATS SELECTED
    if (seatsSelected.length >= 5) return;

    setIsSelected(true);
    onSeatSelection(id);
  }

  return (
    <li
      className={`${styles.seat} ${!isSelected && styles[seatState]} ${
        isSelected && styles.selected
      }`}
      onClick={() => handleToggleSelection(id)}
    >{`${row}${num}`}</li>
  );
}

export default SeatItem;
