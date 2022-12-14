import thermometerImg from "../../assets/thermometer.svg";

import styles from "./temperature.module.scss";

const Temperature = ({ event }) => {
  return (
    <div className={styles.temperature}>
      <img src={thermometerImg} alt="Temperature" />
      {event?.temperature ? (
        <>
          <p>{Math.round(event.temperature)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${event.weatherImg}.png`}
            alt="Temperature"
          />
        </>
      ) : (
        <p>Temperature unavailable for this event</p>
      )}
    </div>
  );
};

export default Temperature;
