import { useContext, useCallback } from "react";

import { ReactComponent as LeftArrowIcon } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrawIcon } from "../../assets/right-arrow.svg";
import { CalendarContext } from "../../hooks/calendarContext";
import Button from "../Button";
import ButtonIcon from "../Button/Icon";

import styles from "./information.module.scss";

const Information = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);

  const handleLeftArrowOnClick = useCallback(
    () => setMonthIndex(monthIndex - 1),
    [monthIndex, setMonthIndex]
  );
  const handleRightArrowOnClick = useCallback(
    () => setMonthIndex(monthIndex + 1),
    [monthIndex, setMonthIndex]
  );

  const handleTodayOnClick = useCallback(
    () => setMonthIndex(new Date().getMonth()),
    [setMonthIndex]
  );

  return (
    <header className={styles.information}>
      <div className={styles["information-row"]}>
        <h1>Calendar</h1>
      </div>
      <div className={styles["information-row"]}>
        <Button onClick={handleTodayOnClick} transparent="transparent">
          Back to today
        </Button>
        <ButtonIcon
          onClick={handleLeftArrowOnClick}
          Icon={LeftArrowIcon}
          className="btn-arrow-icon"
        />
        <ButtonIcon
          onClick={handleRightArrowOnClick}
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
