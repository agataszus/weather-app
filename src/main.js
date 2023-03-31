import "./css/style.css";

import { controlCurrentWeather } from "./controllers/currentWeather/controlCurrentWeather";
import { controlTopBar } from "./controllers/topBar/controlTopBar";
import SearchView from "./views/searchView";
import { controlSearch } from "./controllers/search/controlSearch";
import { controlSearchInput } from "./controllers/search/controlSearchInput";
import ToggleForecastView from "./views/toggleForecastView";
import { controlToggleForecast } from "./controllers/ToggleForecast/controlToggleForecast";
import { renderToggleForecast } from "./controllers/ToggleForecast/renderToggleForecast";

const init = async function () {
  controlTopBar();
  controlCurrentWeather();
  renderToggleForecast();
  SearchView.handleSearchInput(controlSearchInput);
  SearchView.handleSearch(controlSearch);
  ToggleForecastView.handleGoToForecast(controlToggleForecast);
};
init();
