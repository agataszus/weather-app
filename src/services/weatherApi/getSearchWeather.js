import { getSearchWeatherUrl } from "../../constants/weather-api";
import { parseWeatherResponse } from "./parseWeatherResponse";

export const getSearchWeather = async function (input) {
  const response = await fetch(getSearchWeatherUrl(input));
  const data = await response.json();

  if (!response.ok) throw new Error(data?.error?.message ?? "Unknown error");

  return parseWeatherResponse(data);
};
