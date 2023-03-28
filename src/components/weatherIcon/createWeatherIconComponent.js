import styles from "./weatherIcon.module.css";

export const createWeatherIconComponent = (weatherStatus) => {
  const iconImg = document.createElement("img");
  iconImg.setAttribute("src", `../assets/weatherIcons/${weatherStatus}.png`);
  iconImg.classList.add(styles.weatherIcon);

  return iconImg;
};
