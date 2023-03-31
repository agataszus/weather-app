import {
  setActiveDay,
  setForecast,
  setLastDay,
} from "../../models/forecastModel";
import { setCity } from "../../models/weatherModel";
import { getForecastWeather } from "../../services/weatherApi/getForecastWeather";

export const loadForecastWeather = async (location) => {
  const { forecast, city } = await getForecastWeather(location);
  setForecast(forecast);
  setCity(city);
  setActiveDay(0);
  setLastDay(forecast.length - 1);
};
