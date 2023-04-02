import styles from "./weatherIconWhite.module.css";
import cloudy from "../../assets/weatherIconsWhite/cloudy.png";
import fog from "../../assets/weatherIconsWhite/fog.png";
import icePellets from "../../assets/weatherIconsWhite/ice-pellets.png";
import partyCloudy from "../../assets/weatherIconsWhite/party-cloudy.png";
import rain from "../../assets/weatherIconsWhite/rain.png";
import snowy from "../../assets/weatherIconsWhite/snowy.png";
import storm from "../../assets/weatherIconsWhite/storm.png";
import sunny from "../../assets/weatherIconsWhite/sunny.png";

const getWeatherIconPath = (status) => {
  switch (status) {
    case "cloudy":
      return cloudy;
    case "fog":
      return fog;
    case "ice-pellets":
      return icePellets;
    case "party-cloudy":
      return partyCloudy;
    case "rain":
      return rain;
    case "snowy":
      return snowy;
    case "storm":
      return storm;
    case "sunny":
      return sunny;
    default:
      throw new Error("Invalid file name");
  }
};

export const createWeatherIconWhiteComponent = (weatherStatus) => {
  const iconImg = document.createElement("img");
  iconImg.setAttribute(
    "src",
    weatherStatus ? getWeatherIconPath(weatherStatus) : ""
  );
  iconImg.classList.add(styles.weatherIcon);

  return iconImg;
};
