import "./css/style.css";
import { getCoords } from "./models/currentLocationModel";
import { getCity } from "./services/getCity";
import { setCurrentCity } from "./controllers/setCurrentCity";
import locationView from "./views/locationView";
import { controlCityContainer } from "./controllers/controlCityContainer";
import { getCurrentWeather } from "./services/getCurrentWeather";
import currentWeatherView from "./views/currentWeatherView";
import { controlCurrentWeatherContainer } from "./controllers/controlCurrentWeatherContainer";

const init = function () {
  locationView.addCityHandler(controlCityContainer);
  currentWeatherView.addWeatherHandler(controlCurrentWeatherContainer);
};
init();
