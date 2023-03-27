import { getCoords, state } from "../models/currentLocationModel";
import { getCurrentWeather } from "../services/getCurrentWeather";

export const setCurrentWeather = async function () {
  const coords = await getCoords();
  const weather = await getCurrentWeather(coords);
  state.weather = weather;
  return weather;
};
