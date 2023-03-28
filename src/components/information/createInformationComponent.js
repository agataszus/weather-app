import { createTextRowListComponent } from "../textRowList/createTextRowListComponent";
import styles from "./information.module.css";

export const createInformationComponent = (weather) => {
  const container = document.createElement("div");
  container.classList.add(styles.weatherInformationContainer);

  // temperature
  const temperature = document.createElement("h2");
  temperature.classList.add(styles.currentTemperature);
  temperature.textContent = `${weather.temperature}°`;
  container.insertAdjacentElement("afterbegin", temperature);

  const attributesContainer = createTextRowListComponent([
    { key: "pressure", value: `${weather.pressure} hPa` },
    { key: "humidity", value: `${weather.humidity} %` },
    { key: "wind", value: `${weather.windSpeed} m/h` },
  ]);

  container.insertAdjacentElement("beforeend", attributesContainer);

  return container;
};
