import styles from "./ToggleForecast.module.css";

export const TOGGLE_FORECAST_BUTTON_ID = "button-toggle-forecast";

export const createToggleForecastComponent = () => {
  const button = document.createElement("button");
  button.classList.add(styles.goToButton);
  button.setAttribute("id", TOGGLE_FORECAST_BUTTON_ID);
  button.setAttribute("type", "button");
  button.textContent = "Check Weather Forecast".toUpperCase();

  return button;
};

export const toggleForecastButtonText = (isForecastOn) => {
  const button = document.getElementById(TOGGLE_FORECAST_BUTTON_ID);
  let text;
  if (isForecastOn) text = "See current weather";
  else text = "Check Weather Forecast";
  button.textContent = text.toUpperCase();
};
