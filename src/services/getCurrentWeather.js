import {
  BASE_URL,
  CURRENT_API,
  API_KEY,
  getCurrentWeatherUrl,
} from "../constans/constans";

export const getCurrentWeather = async function ({ lat, lng }) {
  const response = await fetch(getCurrentWeatherUrl(lat, lng));
  const data = await response.json();
  const currentData = data.current;
  const weather = {
    condition: {
      description: currentData.condition.text,
      code: +currentData.condition.code,
    },
    pressure: currentData.pressure_mb,
    humidity: currentData.humidity,
    windSpeed: currentData.wind_mph,
    temperature: Math.round(currentData.temp_c),
  };
  console.log(currentData);
  return weather;
};
