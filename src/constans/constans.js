export const BASE_URL = "https://api.weatherapi.com/v1";
export const CURRENT_API = "/current.json";
export const FORECAST_API = "/forecast.json";
export const API_KEY = "cf6654955a9a49409f284746232403";

export const getBaseUrl = () => "https://api.weatherapi.com/v1";
export const getCurrentWeatherUrl = (lat, lng) =>
  `${getBaseUrl()}/current.json?key=${API_KEY}&q=${lat},${lng}`;
