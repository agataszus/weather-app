import { getCurrentWeatherUrl } from "../../constants/weather-api";
import { parseWeatherResponse } from "./parseWeatherResponse";

export const getCurrentWeather = async function ({ lat, lng }) {
  const response = await fetch(getCurrentWeatherUrl(lat, lng));
  const data = await response.json();

  if (!response.ok) throw new Error(data?.error?.message ?? "Unknown error");

  return parseWeatherResponse(data);
};
