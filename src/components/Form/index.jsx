import { useContext, useCallback } from "react";
import { useForm } from "react-hook-form";

import { CalendarContext } from "../../hooks/calendarContext";
import { getWeather } from "../../services/weather";
import { DATE_AND_TIME_DIGITS, getTzoffset } from "../../utils/dates";
import { notifyError, notifySuccess } from "../../utils/toast";
import Button from "../Button";
import ColorSelection, { COLORS } from "../ColorSelection";
import Input from "../Input";
import Temperature from "../Temperature";

import styles from "./form.module.scss";

const Form = () => {
  const {
    day,
    dispatchCallEvent,
    setShowModal,
    event,
    setEvent,
    color,
    setColor,
  } = useContext(CalendarContext);

  const localISOTime = event?.date
    ? new Date(event.date.getTime() - getTzoffset())
        .toISOString()
        .slice(0, DATE_AND_TIME_DIGITS)
    : new Date(day.getTime() - getTzoffset())
        .toISOString()
        .slice(0, DATE_AND_TIME_DIGITS);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      ...event,
      date: localISOTime,
    },
  });

  const handleFormSubmit = useCallback(
    async (values) => {
      const id = event ? event.id : new Date().getTime();

      try {
        const weatherResponse = await getWeather(values.city);
        const data = weatherResponse?.data || {};
        const temperature = data.main?.temp || "Unavailable";
        const weather = data.weather?.[0]?.main || "Unavailable";
        const weatherImg = data.weather?.[0]?.icon || "Unavailable";

        const eventData = {
          ...values,
          id,
          weather,
          temperature,
          weatherImg,
          color,
        };

        if (event) {
          dispatchCallEvent({
            type: "UPDATE_EVENT",
            payload: eventData,
          });
          notifySuccess("Event updated successfully");
        } else {
          dispatchCallEvent({ type: "ADD_EVENT", payload: eventData });
          notifySuccess("Event added successfully");
        }
        setEvent(null);
        setShowModal(false);
        setColor(COLORS[0]);
      } catch (error) {
        setError("city", {
          type: "manual",
          message: error?.response?.data?.message,
        });
        notifyError("Error getting weather data");
      }
    },
    [
      color,
      dispatchCallEvent,
      event,
      setColor,
      setError,
      setEvent,
      setShowModal,
    ]
  );

  const onEventDelete = useCallback(() => {
    dispatchCallEvent({ type: "DELETE_EVENT", payload: event });
    notifySuccess("Event deleted successfully");
    setEvent(null);
    setShowModal(false);
  }, [event, dispatchCallEvent, setEvent, setShowModal]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        maxLength={40}
        type="text"
        label="Event title"
        placeholder="Please complete event title"
        error={errors.title?.message}
        {...register("title", {
          required: "Required field",
        })}
      />
      <Input
        maxLength={200}
        type="textarea"
        label="Event description"
        placeholder="Please add a description"
        error={errors.description?.message}
        {...register("description", { required: "Required field" })}
      />
      <Input
        maxLength={60}
        type="text"
        label="City"
        placeholder="Please insert city"
        error={errors.city?.message}
        {...register("city", {
          required: "Required field",
        })}
      />
      <Input
        type="datetime-local"
        label="Date"
        placeholder="Please select date"
        error={errors.date?.message}
        {...register("date", {
          required: "Required field",
          valueAsDate: true,
        })}
      />

      <ColorSelection />
      <Temperature event={event} />
      <div className={styles["form-footer"]}>
        <Button color="red" disabled={!event} onClick={onEventDelete}>
          Delete
        </Button>
        <Button type="submit" color="blue" disabled={isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
