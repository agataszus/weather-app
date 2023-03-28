import { createWeatherDescriptionComponent } from "../weatherDescription/createWeatherDescriptionComponent";
import { createWeatherIconComponent } from "../weatherIcon/createWeatherIconComponent";
import styles from "./displayComponent.module.css";

export const createDisplayComponent = (weather) => {
  const container = document.createElement("div");
  container.classList.add(styles.displayContainer);

  const iconImg = createWeatherIconComponent(weather.weatherStatus);
  container.insertAdjacentElement("afterbegin", iconImg);

  const description = createWeatherDescriptionComponent(
    weather.condition.description
  );
  container.insertAdjacentElement("beforeend", description);

  return container;
};
