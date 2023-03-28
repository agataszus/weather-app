import { createDisplayComponent } from "../display/createDisplayComponent";
import { createInformationComponent } from "../information/createInformationComponent";
import styles from "./currentWeather.module.css";

export const createCurrentWeatherComponent = (weather) => {
  const container = document.createElement("div");
  container.classList.add(styles.currentWeather);
  const displayContainer = createDisplayComponent(weather);
  const weatherInformationContainer = createInformationComponent(weather);
  container.insertAdjacentElement("afterbegin", displayContainer);
  container.insertAdjacentElement("afterbegin", weatherInformationContainer);

  return container;
};
