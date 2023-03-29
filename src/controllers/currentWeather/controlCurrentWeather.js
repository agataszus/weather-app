import { getError } from "../../models/weatherModel";
import ErrorView from "../../views/errorView";
import { initCurrentWeather } from "./initCurrentWeather";
import { renderCity } from "./renderCity";
import { renderCurrentWeather } from "./renderCurrentWeather";
import { renderGoToForecast } from "./renderGoToForecast";

export const controlCurrentWeather = async () => {
  await initCurrentWeather();
  const error = getError();
  if (error) return ErrorView.renderError(error);

  renderGoToForecast();
  renderCity();
  renderCurrentWeather();
};
