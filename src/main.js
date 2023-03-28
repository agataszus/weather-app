import "./css/style.css";

import { controlCurrentWeather } from "./controllers/currentWeather/controlCurrentWeather";

const init = async function () {
  controlCurrentWeather();
};
init();
