import { getForecastWeatherUrl } from "../../constants/weather-api";
import { mapCodeToWeatherStatus } from "../../views/selectors/mapCodeToWeatherStatus";

export const getForecastWeather = async (city) => {
  const response = await fetch(getForecastWeatherUrl(city));
  const data = await response.json();

  if (!response.ok) throw new Error(data?.error?.message ?? "Unknown error");

  const forecast = data.forecast.forecastday.map((day, i) => {
    return {
      isDay: i,
      date: day.date,
      temperature: Math.round(day.day.maxtemp_c),
      weatherStatus: mapCodeToWeatherStatus(+day.day.condition.code),
    };
  });
  const daysArray = forecast.map((day) => day.date.slice(8, 10));
  const statusArray = forecast.map((day) => day.weatherStatus);

  return { forecast, city: data.location.name, daysArray, statusArray };
};
