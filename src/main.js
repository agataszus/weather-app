import "./css/style.css";
import { getCoords } from "./models/currentLocationModel";
import { getCity } from "./services/getCity";
import { setCurrentCity } from "./controllers/setCurrentCity";
import LocationView from "./views/locationView";
import { controlCityContainer } from "./controllers/controlCityContainer";
import { getCurrentWeather } from "./services/getCurrentWeather";
import currentWeatherView from "./views/currentWeatherView";
import { controlCurrentWeatherContainer } from "./controllers/controlCurrentWeatherContainer";

const init = function () {
  LocationView.addCityHandler(controlCityContainer);
  currentWeatherView.addWeatherHandler(controlCurrentWeatherContainer);
};
init();
