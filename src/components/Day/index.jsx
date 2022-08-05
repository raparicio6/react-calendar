import { useContext, useEffect, useState, useCallback } from "react";
import ReactTooltip from "react-tooltip";

import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { CalendarContext } from "../../hooks/calendarContext";
import { useModal } from "../../hooks/useModal";
import { DATE_DIGITS } from "../../utils/dates";
import ButtonIcon from "../Button/Icon";
import EventInfo from "../EventInfo";

import styles from "./day.module.scss";

const Day = ({ day, rowIndex }) => {
  const { showModal, setShowModal, setDay, events, setEvent } =
    useContext(CalendarContext);
  const [dayEvents, setDayEvents] = useState([]);
  const [openEvents, setOpenEvents] = useState(false);
  const [openCalendarModal, closeCalendarModal, CalendarModal] = useModal();

  useEffect(() => {
    if (showModal) {
      openCalendarModal();
    } else {
      closeCalendarModal();
    }
  }, [showModal, openCalendarModal, closeCalendarModal]);

  useEffect(() => {
    if (openEvents) {
      openCalendarModal();
    } else {
      closeCalendarModal();
    }
  }, [openEvents, openCalendarModal, closeCalendarModal]);

  useEffect(() => {
    const currentEvents = events.filter(
      (event) =>
        event?.date?.toISOString().slice(0, DATE_DIGITS) ===
        day?.toISOString().slice(0, DATE_DIGITS)
    );

    setDayEvents(currentEvents);
  }, [day, events]);

  useEffect(() => {
    if (!dayEvents.length) {
      setOpenEvents(false);
    }
  }, [dayEvents]);

  const getClass = useCallback(() => {
    const today = new Date().setHours(0, 0, 0, 0);
    return day.setHours(0, 0, 0, 0) === today ? "day-current" : null;
  }, [day]);

  const onDayClick = useCallback(() => {
    setShowModal(!showModal);
    setDay(day);
  }, [showModal, day, setShowModal, setDay]);

  const onEventsClick = useCallback(
    (event) => {
      event.stopPropagation();
      setOpenEvents(!openEvents);
    },
    [openEvents]
  );

  return (
    <>
      <div className={styles.day} onClick={onDayClick}>
        <header className={styles["day-header"]}>
          {rowIndex === 0 && (
            <p>
              <strong className={styles["day-header-strong"]}>
                {day.toLocaleString("en-us", { weekday: "short" })}
              </strong>
            </p>
          )}
          <p className={styles[getClass()]}>{day.getDate()}</p>
        </header>

        <div className={styles["day-event-container"]}>
          {dayEvents.slice(0, 3).map((event, index) => (
            <div
              className={`${styles["day-event-content"]} ${
                styles[`day-event-content-${event.color}`]
              }`}
              onClick={() => setEvent(event)}
              key={index}
            >
              <span>
                <p data-tip={event.title}>{event.title}</p>
                <ReactTooltip place="top" effect="solid" />
              </span>
            </div>
          ))}

          {dayEvents.length > 2 && (
            <span className={styles["day-event-content-all"]}>
              <p onClick={onEventsClick} data-tip="All events">
                {dayEvents.length}
              </p>
              <ReactTooltip place="top" effect="solid" />
            </span>
          )}
        </div>
      </div>
      <CalendarModal className={styles["react-modal-details"]}>
        <h1>All Events</h1>
        <ButtonIcon
          onClick={onEventsClick}
          Icon={CloseIcon}
          className="btn-close-modal"
        />
        {dayEvents.map((event) => (
          <EventInfo event={event} key={event.id} />
        ))}
      </CalendarModal>
    </>
  );
};

export default Day;
