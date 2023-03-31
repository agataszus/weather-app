// import { getError } from "../../models/weatherModel";
// import errorView from "../../views/errorView";
import { initSearchWeather } from "../search/initSearchWeather";
import { renderCity } from "../topBar/renderCity";
import { renderCurrentWeather } from "./renderCurrentWeather";

export const updateCurrentWeather = async (location) => {
  await initSearchWeather(location);

  renderCurrentWeather();
  renderCity();
};
