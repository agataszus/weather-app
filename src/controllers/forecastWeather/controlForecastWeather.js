// import { getError } from "../../models/weatherModel";
// import errorView from "../../views/errorView";
import { renderCity } from "../topBar/renderCity";
import { loadForecastWeather } from "./loadForecastWeather";
import { renderForecastWeather } from "./renderForecastWeather";

export const controlForecastWeather = async (location) => {
  await loadForecastWeather(location);

  renderForecastWeather();
  renderCity();
};
