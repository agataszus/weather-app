import CurrentWeatherView from "../views/currentWeatherView";
import { setCurrentWeather } from "./setCurrentWeather";

export const controlCurrentWeatherContainer = async function () {
  const weather = await setCurrentWeather();
  CurrentWeatherView.renderCurrentWeatherContainer(weather);
};
