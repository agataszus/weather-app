import {
  getActiveDay,
  getForecast,
  getLastDay,
} from "../../models/forecastModel";
import ForecastWeatherView from "../../views/forecastWeatherView";

export const renderForecastWeather = () => {
  const forecast = getForecast();
  const activeDay = getActiveDay();
  const lastDay = getLastDay();
  ForecastWeatherView.render(forecast, activeDay, lastDay);
};
