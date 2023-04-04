import { createWeatherIconWhiteComponent } from "../weatherIconWhite/createWeatherIconWhiteComponent";
import styles from "./dateTile.module.css";

export const createDateTileComponent = (weatherStatus, date) => {
  const container = document.createElement("div");
  container.classList.add(styles.dateTile);
  container.setAttribute("data-isDayPicker", "");

  const icon = createWeatherIconWhiteComponent(weatherStatus);
  container.insertAdjacentElement("beforeend", icon);

  const text = document.createElement("p");
  text.classList.add(styles.dateText);
  text.textContent = date;
  if (!date) container.style.visibility = "hidden";
  container.insertAdjacentElement("beforeend", text);

  return container;
};
