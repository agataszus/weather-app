import { getWeather } from "../../models/weatherModel";
import CurrentWeatherView from "../../views/currentWeatherView";

export const renderCurrentWeather = function () {
  const weather = getWeather();
  CurrentWeatherView.renderCurrentWeather(weather);
};
