import { useContext } from "react";

import checkImg from "../../assets/check.svg";
import { CalendarContext } from "../../hooks/calendarContext";

export const COLORS = ["red", "blue", "green"];

const ColorSelection = ({ event }) => {
  const { setColor, event: selectedEvent, color } = useContext(CalendarContext);
  const selectedColor = selectedEvent?.color || color;

  return (
    <div className="color">
      <span className="color-selection">
        {event ? (
          <span key={event.color} className={`color-selection-${event.color}`}>
            <img src={checkImg} alt="Check" />
          </span>
        ) : (
          COLORS.map((color) => (
            <span
              key={color}
              className={`color-selection-${color} color-selection-pointer`}
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
