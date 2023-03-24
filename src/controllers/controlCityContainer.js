import locationView from "../views/locationView";
import { setCurrentCity } from "./setCurrentCity";

export const controlCityContainer = async function () {
  const city = await setCurrentCity();
  locationView._renderLocationContainer(city);
};
