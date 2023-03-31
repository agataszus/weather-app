import { getIsForecastOn } from "../../models/forecastModel";
import { getSearchInput, setSelectedInput } from "../../models/searchModel";
import { setCity } from "../../models/weatherModel";
// import LoaderView from "../../views/loaderView.js";
import { updateCurrentWeather } from "../currentWeather/updateCurrentWeather";
import { controlError } from "../error/controlError";
import { controlForecastWeather } from "../forecastWeather/controlForecastWeather";
import { renderCity } from "../topBar/renderCity";

export const controlSearch = async () => {
  const isForecast = getIsForecastOn();
  try {
    const searchInput = getSearchInput();
    if (!searchInput) throw new Error("Input is required!");
    setSelectedInput(searchInput);

    controlError(false);
    // LoaderView.renderLoader();

    if (isForecast) await controlForecastWeather(searchInput);
    else await updateCurrentWeather(searchInput);
  } catch (error) {
    controlError(true, error);
    setCity("--------");
    renderCity();
  }
};
