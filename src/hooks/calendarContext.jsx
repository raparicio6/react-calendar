import React, { createContext, useEffect, useReducer, useState } from "react";

import { COLORS } from "../components/ColorSelection";

const CalendarContext = createContext();

const eventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_EVENT":
      return [...state, payload];
    case "UPDATE_EVENT":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== payload.id);
    default:
      return state;
  }
};

const initializeEvents = () => {
  const events = localStorage.getItem("events");

  try {
    const parsedEvents = JSON.parse(events).map((event) => ({
      ...event,
      date: new Date(event.date),
    }));

    return parsedEvents;
  } catch (error) {
    return [];
  }
};

const ContextProvider = ({ children }) => {
  const [day, setDay] = useState(null);
  const [event, setEvent] = useState(null);
  const [color, setColor] = useState(event ? event.color : COLORS[0]);
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [showModal, setShowModal] = useState(false);
  const [events, dispatchCallEvent] = useReducer(
    eventsReducer,
    [],
    initializeEvents
  );

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <CalendarContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showModal,
        setShowModal,
        day,
        setDay,
        events,
        dispatchCallEvent,
        event,
        setEvent,
        color,
        setColor,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export { ContextProvider, CalendarContext };
