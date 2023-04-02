import DayPickerView from "../../views/dayPickerView";
import { renderDayPicker } from "../DayPicker/renderDayPicker";
import { renderCity } from "../topBar/renderCity";
import { loadForecastWeather } from "./loadForecastWeather";
import { renderForecastWeather } from "./renderForecastWeather";

export const controlForecastWeather = async (location) => {
  await loadForecastWeather(location);

  DayPickerView.show();
  renderForecastWeather();
  renderCity();
  renderDayPicker();
};
