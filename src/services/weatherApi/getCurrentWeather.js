import { getCurrentWeatherUrl } from "../../constants/weather-api";
import { mapCodeToWeatherStatus } from "../../views/selectors/mapCodeToWeatherStatus";

export const getCurrentWeather = async function ({ lat, lng }) {
  const response = await fetch(getCurrentWeatherUrl(lat, lng));
  const data = await response.json();

  if (!response.ok) throw new Error(data?.error?.message ?? "Unknown error");

  const currentData = data.current;
  const weather = {
    condition: {
      description: currentData.condition.text,
    },
    pressure: currentData.pressure_mb,
    humidity: currentData.humidity,
    windSpeed: currentData.wind_mph,
    temperature: Math.round(currentData.temp_c),
    weatherStatus: mapCodeToWeatherStatus(+currentData.condition.code),
  };
  return { weather, city: data.location.name };
};
