import styles from "./weatherIcon.module.css";
import cloudy from "../../assets/weatherIcons/cloudy.png";
import error from "../../assets/weatherIcons/error.png";
import fog from "../../assets/weatherIcons/fog.png";
import icePellets from "../../assets/weatherIcons/ice-pellets.png";
import partyCloudy from "../../assets/weatherIcons/party-cloudy.png";
import rain from "../../assets/weatherIcons/rain.png";
import snowy from "../../assets/weatherIcons/snowy.png";
import storm from "../../assets/weatherIcons/storm.png";
import sunny from "../../assets/weatherIcons/sunny.png";

const getWeatherIconPath = (status) => {
  switch (status) {
    case "cloudy":
      return cloudy;
    case "error":
      return error;
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

export const createWeatherIconComponent = (weatherStatus) => {
  const iconImg = document.createElement("img");
  iconImg.setAttribute("src", getWeatherIconPath(weatherStatus));
  iconImg.classList.add(styles.weatherIcon);

  return iconImg;
};
