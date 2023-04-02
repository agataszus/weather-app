import {
  getLastDay,
  setActiveDay,
  setDaysArray,
  setFirstDayValue,
  setForecast,
  setLastDay,
  setLastDayValue,
} from "../../models/forecastModel";
import { setCity } from "../../models/weatherModel";
import { getForecastWeather } from "../../services/weatherApi/getForecastWeather";

export const loadForecastWeather = async (location) => {
  const { forecast, city, daysArray } = await getForecastWeather(location);
  setForecast(forecast);
  setCity(city);
  setDaysArray(daysArray);
  setActiveDay(0);
  setLastDay(forecast.length - 1);
  setFirstDayValue(forecast[0].date.slice(8, 10));
  setLastDayValue(forecast[getLastDay()].date.slice(8, 10));
};
