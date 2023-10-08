import "./css/style.css";

import { controlCurrentWeather } from "./controllers/currentWeather/controlCurrentWeather";
import { controlTopBar } from "./controllers/topBar/controlTopBar";
import SearchView from "./views/searchView";
import { controlSearch } from "./controllers/search/controlSearch";
import { controlSearchInput } from "./controllers/search/controlSearchInput";
import ToggleForecastView from "./views/toggleForecastView";
import { controlToggleForecast } from "./controllers/ToggleForecast/controlToggleForecast";
import { renderToggleForecast } from "./controllers/ToggleForecast/renderToggleForecast";
import DayPickerView from "./views/dayPickerView";
import { controlDayPicker } from "./controllers/DayPicker/controlDayPicker";
import GlobalView from "./views/globalView";
import { controlKeyDownListener } from "./controllers/DayPicker/controlKeyDownListener";
import { controlLoupe } from "./controllers/search/controlLoupe";
import SearchIconView from "./views/searchIconView";

const init = async function () {
  controlTopBar();
  controlCurrentWeather();
  renderToggleForecast();
  SearchView.handleSearchInput(controlSearchInput);
  SearchView.handleSearch(controlSearch);
  ToggleForecastView.handleGoToForecast(controlToggleForecast);
  DayPickerView.handleDayPicker(controlDayPicker);
  GlobalView.handleKeyDownListener(controlKeyDownListener);
  SearchIconView.handle(controlLoupe);
};
init();

