import { setCity, setWeather } from "../../models/weatherModel";
import { getSearchWeather } from "../../services/weatherApi/getSearchWeather";

export const initSearchWeather = async (location) => {
  const { weather, city } = await getSearchWeather(location);
  setCity(city);
  setWeather(weather);
};
