import { createWeatherCardComponent } from "../weatherCard/createWeatherCardComponent";
import styles from "./weatherCardsRow.module.css";

export const createWeatherCardsRowComponent = (forecast, day, maxDay) => {
  const container = document.createElement("div");
  container.classList.add(styles.weatherCardsRow);

  if (day > 0) {
    const leftCard = createWeatherCardComponent(forecast[day - 1]);
    leftCard.classList.add(styles.leftCard);
    container.insertAdjacentElement("beforeend", leftCard);
  }

  const middleCard = createWeatherCardComponent(forecast[day]);
  middleCard.classList.add(styles.middleCard);
  container.insertAdjacentElement("beforeend", middleCard);

  if (day < maxDay) {
    const rightCard = createWeatherCardComponent(forecast[day + 1]);
    rightCard.classList.add(styles.rightCard);
    container.insertAdjacentElement("beforeend", rightCard);
  }

  return container;
};
