import "./css/style.css";

import { controlCurrentWeather } from "./controllers/currentWeather/controlCurrentWeather";
import { controlTopBar } from "./controllers/currentWeather/controlTopBar";
import ToggleForecastView from "./views/toggleForecastView";
import { controlToggleForecast } from "./controllers/ToggleForecast/controlToggleForecast";
import { renderToggleForecast } from "./controllers/ToggleForecast/renderToggleForecast";

const init = async function () {
  controlTopBar();
  controlCurrentWeather();
  renderToggleForecast();
  ToggleForecastView.handleGoToForecast(controlToggleForecast);
};
init();
