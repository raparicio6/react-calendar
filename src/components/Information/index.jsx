import { useContext } from "react";

import { ReactComponent as LeftArrowIcon } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrawIcon } from "../../assets/right-arrow.svg";
import { CalendarContext } from "../../hooks/calendarContext";
import Button from "../Button";
import ButtonIcon from "../Button/Icon";

const Information = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);

  const onMonthChange = (operation) =>
    setMonthIndex(operation === "-" ? monthIndex - 1 : monthIndex + 1);

  const onClick = () => setMonthIndex(new Date().getMonth());

  return (
    <header className="information">
      <div className="information-row">
        <h1>Calendar</h1>
      </div>
      <div className="information-row">
        <Button onClick={onClick} transparent="transparent">
          Back to today
        </Button>
        <ButtonIcon
          onClick={() => onMonthChange("-")}
          Icon={LeftArrowIcon}
          className="btn-arrow-icon"
        />
        <ButtonIcon
          onClick={() => onMonthChange("+")}
          Icon={RightArrawIcon}
          className="btn-arrow-icon"
        />
      </div>
      <h2>
        {new Date(new Date().getFullYear(), monthIndex).toLocaleDateString(
          "default",
          { month: "long", year: "numeric" }
        )}
      </h2>
    </header>
  );
};

export default Information;
