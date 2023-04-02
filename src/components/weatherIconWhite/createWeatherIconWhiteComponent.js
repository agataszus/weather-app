import styles from "./weatherIconWhite.module.css";

export const createWeatherIconWhiteComponent = (weatherStatus) => {
  const iconImg = document.createElement("img");
  iconImg.setAttribute(
    "src",
    weatherStatus ? `../assets/weatherIconsWhite/${weatherStatus}.png` : ""
  );
  iconImg.classList.add(styles.weatherIcon);

  return iconImg;
};
