import { setCity, setError, setWeather } from "../../models/weatherModel";
import { getCurrentLocation } from "../../services/geolocation/getCurrentLocation";
import { getCurrentWeather } from "../../services/weatherApi/getCurrentWeather";

export const initCurrentWeather = async () => {
  try {
    const { latitude: lat, longitude: lng } = await getCurrentLocation();
    const { weather, city } = await getCurrentWeather({ lat, lng });
    setCity(city);
    setWeather(weather);
  } catch (error) {
    setError(error);
  }
};
