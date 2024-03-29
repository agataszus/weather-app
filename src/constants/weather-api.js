export const BASE_URL = "https://api.weatherapi.com/v1";
export const CURRENT_PATH = "/current.json";
export const FORECAST_PATH = "/forecast.json";
export const API_KEY = import.meta.env.VITE_API_KEY;
console.log(import.meta.env);

export const getBaseUrl = () => "https://api.weatherapi.com/v1";
export const getCurrentWeatherUrl = (lat, lng) =>
  `${getBaseUrl()}/current.json?key=${API_KEY}&q=${lat},${lng}`;
export const getSearchWeatherUrl = (input) =>
  `${getBaseUrl()}/current.json?key=${API_KEY}&q=${input}`;
export const getForecastWeatherUrl = (city) =>
  `${getBaseUrl()}/forecast.json?key=${API_KEY}&q=${city}&days=14`;
