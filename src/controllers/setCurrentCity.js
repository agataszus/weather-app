import { getCoords, state } from "../models/currentLocationModel";
import { getCity } from "../services/getCity";

export const setCurrentCity = async function () {
  const coords = await getCoords();
  const city = await getCity(coords);
  state.city = city;
  return city;
};
