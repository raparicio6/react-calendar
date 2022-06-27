import api from "../api";

export const getWeather = (city) =>
  api.get("weather", {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      units: "metric",
      q: city,
    },
  });
