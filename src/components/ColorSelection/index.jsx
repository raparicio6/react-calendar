import { useContext } from "react";

import checkImg from "../../assets/check.svg";
import { CalendarContext } from "../../hooks/calendarContext";

import styles from "./color-selection.module.scss";

export const COLORS = ["red", "blue", "green"];

const ColorSelection = ({ event }) => {
  const {
    setColor,
    event: selectedEvent,
    color: defaultColor,
  } = useContext(CalendarContext);
  const selectedColor = selectedEvent?.color || defaultColor;

  return (
    <div className={styles.color}>
      <span className={styles["color-selection"]}>
        {event ? (
          <span
            key={event.color}
            className={styles[`color-selection-${event.color}`]}
          >
            <img src={checkImg} alt="Check" />
          </span>
        ) : (
          COLORS.map((color) => (
            <span
              key={color}
              className={`${styles[`color-selection-${color}`]} ${
                styles["color-selection-pointer"]
              }`}
              onClick={() => setColor(color)}
            >
              {selectedColor === color && <img src={checkImg} alt="Check" />}
            </span>
          ))
        )}
      </span>
    </div>
  );
};

export default ColorSelection;
