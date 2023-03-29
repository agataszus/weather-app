import "./css/style.css";

import { controlCurrentWeather } from "./controllers/currentWeather/controlCurrentWeather";
import { controlTopBar } from "./controllers/currentWeather/controlTopBar";

const init = async function () {
  controlTopBar();
  controlCurrentWeather();
};
init();
