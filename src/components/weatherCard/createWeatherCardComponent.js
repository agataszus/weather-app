import { createWeatherIconComponent } from "../weatherIcon/createWeatherIconComponent";
import styles from "./weatherCard.module.css";
import lineSrc from "../../assets/line.svg";

export const createWeatherCardComponent = (weather) => {
  const container = document.createElement("div");
  container.classList.add(styles.weatherCard);

  const temperature = document.createElement("h2");
  temperature.classList.add(styles.temperature);
  temperature.textContent = `${weather.temperature}`;
  const span = document.createElement("span");
  span.classList.add(styles.degreeSymbol);
  span.textContent = "°";
  temperature.insertAdjacentElement("beforeend", span);
  container.insertAdjacentElement("beforeend", temperature);

  const line = document.createElement("img");
  line.classList.add(styles.lineElement);
  line.setAttribute("src", lineSrc);
  container.insertAdjacentElement("beforeend", line);

  const iconImg = createWeatherIconComponent(weather.weatherStatus);
  iconImg.classList.add(styles.weatherCardIcon);
  container.insertAdjacentElement("beforeend", iconImg);

  return container;
};
