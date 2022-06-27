import { useContext } from "react";

import { ReactComponent as EditIcon } from "../../assets/pen.svg";
import { ReactComponent as RemoveIcon } from "../../assets/trash.svg";
import { CalendarContext } from "../../hooks/calendarContext";
import { DATE_AND_TIME_DIGITS } from "../../utils/dates";
import { notifySuccess } from "../../utils/toast";
import ButtonIcon from "../Button/Icon";
import ColorSelection from "../ColorSelection";
import Input from "../Input";

const EventInfo = ({ event }) => {
  const { setShowModal, setEvent, dispatchCallEvent } =
    useContext(CalendarContext);

  const onEventEdit = () => {
    setEvent(event);
    setShowModal(true);
  };

  const onEventDelete = () => {
    dispatchCallEvent({ type: "DELETE_EVENT", payload: event });
    notifySuccess("Event deleted successfully");
  };

  return (
    <div className="info">
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
      <Input
        value={event.date?.toISOString().slice(0, DATE_AND_TIME_DIGITS)}
        type="datetime-local"
        label="Date"
      />

      <div className="details-group">
        <ColorSelection event={event} />

        <div className="details-group-content">
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

      <hr className="separator" />
    </div>
  );
};

export default EventInfo;
