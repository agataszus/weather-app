// import { getError } from "../../models/weatherModel";
// import errorView from "../../views/errorView";
import DayPickerView from "../../views/dayPickerView";
import { initSearchWeather } from "../search/initSearchWeather";
import { renderCity } from "../topBar/renderCity";
import { renderCurrentWeather } from "./renderCurrentWeather";

export const updateCurrentWeather = async (location) => {
  await initSearchWeather(location);

  DayPickerView.hide();
  renderCurrentWeather();
  renderCity();
};
