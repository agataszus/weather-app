import { getIsForecastOn } from "../../models/forecastModel";
import {
  getIsMobile,
  getSearchInput,
  setSearchInput,
  setSelectedInput,
} from "../../models/searchModel";
import { setCity } from "../../models/weatherModel";
import { updateCurrentWeather } from "../currentWeather/updateCurrentWeather";
import { controlError } from "../error/controlError";
import { controlForecastWeather } from "../forecastWeather/controlForecastWeather";
import { renderCity } from "../topBar/renderCity";
import { controlLoupe } from "./controlLoupe";

export const controlSearch = async () => {
  const isForecast = getIsForecastOn();
  try {
    const searchInput = getSearchInput();
    if (!searchInput) throw new Error("Input is required!");
    setSelectedInput(searchInput);
    setSearchInput("");

    controlError(false);

    if (isForecast) await controlForecastWeather(searchInput);
    else await updateCurrentWeather(searchInput);

    const isMobile = getIsMobile();
    if (!isMobile) return;
    controlLoupe();
  } catch (error) {
    controlError(true, error);
    setCity("--------");
    renderCity();
  }
};
