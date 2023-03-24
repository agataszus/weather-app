import "./css/style.css";
import { getCoords } from "./models/currentLocationModel";
import { getCity } from "./services/getCity";
import { setCurrentCity } from "./controllers/setCurrentCity";
import locationView from "./views/locationView";
import { controlCityContainer } from "./controllers/controlCityContainer";

const init = function () {
  locationView.addCityHandler(controlCityContainer);
};
init();
