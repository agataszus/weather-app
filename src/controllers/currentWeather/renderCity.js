import { getCity } from "../../models/weatherModel";
import LocationView from "../../views/locationView";

export const renderCity = async function () {
  const city = getCity();
  LocationView.renderLocation(city);
};
