import { renderForecastWeather } from "../forecastWeather/renderForecastWeather";
import { renderDayPicker } from "./renderDayPicker";
import { togglePickerButtons } from "./togglePickerButtons";

export const controlDayPicker = (day) => {
  renderDayPicker(day);
  renderForecastWeather();
  togglePickerButtons();
};
