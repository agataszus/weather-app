import styles from "./goToForecast.module.css";

export const createGoToForecastComponent = () => {
  const button = document.createElement("button");
  button.classList.add(styles.goToButton);
  button.setAttribute("type", "button");
  button.textContent = "Check Weather Forecast".toUpperCase();

  return button;
};
