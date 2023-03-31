// import { getError } from "../../models/weatherModel";
// import errorView from "../../views/errorView";
import dayPickerView from "../../views/dayPickerView";
import { renderCity } from "../topBar/renderCity";
import { loadForecastWeather } from "./loadForecastWeather";
import { renderForecastWeather } from "./renderForecastWeather";

export const controlForecastWeather = async (location) => {
  await loadForecastWeather(location);

  renderForecastWeather();
  renderCity();
  dayPickerView.render([11, 12, 13, 14, 15, 16, 17, 18, 19]);
};
