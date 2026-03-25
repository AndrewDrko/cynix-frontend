import styles from "./SeatGrid.module.css";
import SeatItem from "../../ui/SeatItem";

function SeatGrid({ seats, onSeatSelection, seatsSelected }) {
  let rowReminder = seats[0].row;
  let rowArray = [];

  const seatsPerRow = seats.reduce((acc, seat, i) => {
    if (rowReminder === seat.row) {
      rowArray.push(seat);
    }

    if (rowReminder != seat.row) {
      acc.push(rowArray);
      rowArray = [seat];
      rowReminder = seat.row;
    }

    if (i === seats.length - 1) {
      acc.push(rowArray);
    }

    return acc;
  }, []);

  return (
    <div className={styles.seatsContainer}>
      {seatsPerRow.map((row, i) => (
        <ul className={styles.seatGrid} key={i}>
          {row
            .sort((a, b) => a.seatNumber - b.seatNumber) // orden por número si quieres
            .map((seat) => (
              <SeatItem
                key={seat._id}
                id={seat._id}
                row={seat.row}
                num={seat.seatNumber}
                seatStatus={seat.isAvailable}
                onSeatSelection={onSeatSelection}
                seatsSelected={seatsSelected}
              />
            ))}
        </ul>
      ))}
    </div>
  );
}

export default SeatGrid;
