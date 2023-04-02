import { renderForecastWeather } from "../forecastWeather/renderForecastWeather";
import { renderDayPicker } from "./renderDayPicker";

export const controlDayPicker = (day) => {
  renderDayPicker(day);
  renderForecastWeather();
};
