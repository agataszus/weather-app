import { initCurrentWeather } from "./initCurrentWeather";
import { renderCity } from "./renderCity";
import { renderCurrentWeather } from "./renderCurrentWeather";

export const controlCurrentWeather = async () => {
  await initCurrentWeather();
  renderCity();
  renderCurrentWeather();
};
