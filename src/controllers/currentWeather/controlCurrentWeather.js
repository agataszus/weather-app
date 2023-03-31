import { initCurrentWeather } from "./initCurrentWeather";
import { renderCity } from "../topBar/renderCity";
import { renderCurrentWeather } from "./renderCurrentWeather";
import { controlError } from "../error/controlError";

export const controlCurrentWeather = async () => {
  try {
    controlError(false);
    await initCurrentWeather();
    renderCity();
    renderCurrentWeather();
  } catch (error) {
    controlError(true, error);
  }
};
