import { useContext, useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import ButtonIcon from "../../components/Button/Icon";
import Form from "../../components/Form";
import Information from "../../components/Information";
import Month from "../../components/Month";
import { CalendarContext } from "../../hooks/calendarContext";
import { useModal } from "../../hooks/useModal";
import { getMonth } from "../../utils/dates";

import styles from "./calendar.module.scss";

const Calendar = () => {
  const { monthIndex, showModal, setShowModal, setEvent } =
    useContext(CalendarContext);
  const [month, setMonth] = useState(getMonth());
  const [openCalendarModal, closeCalendarModal, CalendarModal] = useModal();

  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [setMonth, monthIndex]);

  useEffect(() => {
    if (showModal) {
      openCalendarModal();
    } else {
      closeCalendarModal();
    }
  }, [showModal, openCalendarModal, closeCalendarModal]);

  const onIconClick = () => {
    setShowModal(!showModal);
    setEvent(null);
  };

  return (
    <div className={styles.calendar}>
      <Information />
      <div className={styles["calendar-content"]}>
        <Month month={month} />
        <CalendarModal className="react-modal-content">
          <ButtonIcon
            onClick={onIconClick}
            Icon={CloseIcon}
            className="btn-close-modal"
          />
          <Form />
        </CalendarModal>
      </div>
    </div>
  );
};

export default Calendar;
