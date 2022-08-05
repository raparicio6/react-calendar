import { useContext, useCallback } from "react";

import { ReactComponent as EditIcon } from "../../assets/pen.svg";
import { ReactComponent as RemoveIcon } from "../../assets/trash.svg";
import { CalendarContext } from "../../hooks/calendarContext";
import { DATE_AND_TIME_DIGITS, getTzoffset } from "../../utils/dates";
import { notifySuccess } from "../../utils/toast";
import ButtonIcon from "../Button/Icon";
import ColorSelection from "../ColorSelection";
import Input from "../Input";

import styles from "./event-info.module.scss";

const EventInfo = ({ event }) => {
  const { setShowModal, setEvent, dispatchCallEvent } =
    useContext(CalendarContext);

  const onEventEdit = useCallback(() => {
    setEvent(event);
    setShowModal(true);
  }, [event, setEvent, setShowModal]);

  const onEventDelete = useCallback(() => {
    dispatchCallEvent({ type: "DELETE_EVENT", payload: event });
    notifySuccess("Event deleted successfully");
  }, [event, dispatchCallEvent]);

  const localISOTime =
    event?.date &&
    new Date(event.date.getTime() - getTzoffset())
      .toISOString()
      .slice(0, DATE_AND_TIME_DIGITS);

  return (
    <div className={styles.info}>
      <Input
        disabled={true}
        value={event.title}
        type="text"
        label="Event title"
      />
      <Input
        value={event.description}
        maxLength={200}
        type="textarea"
        label="Event description"
      />
      <Input value={event.city} maxLength={60} type="text" label="City" />
      <Input value={localISOTime} type="datetime-local" label="Date" />

      <div className={styles["info-group"]}>
        <ColorSelection event={event} />

        <div className={styles["info-group-content"]}>
          <ButtonIcon
            onClick={onEventEdit}
            Icon={EditIcon}
            className="btn-close-modal"
          />
          <ButtonIcon
            onClick={onEventDelete}
            Icon={RemoveIcon}
            className="btn-close-modal"
          />
        </div>
      </div>

      <hr className={styles.separator} />
    </div>
  );
};

export default EventInfo;
