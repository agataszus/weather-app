import { selectCurrentWeatherContainer } from "./selectors/selectCurrentWeatherContainer";
import TextRowView from "./textRowView";

class CurrentWeatherView {
  _getParentElement() {
    return selectCurrentWeatherContainer();
  }

  addWeatherHandler(handler) {
    window.addEventListener("load", async function () {
      await handler();
    });
  }

  _createCurrentWeatherContainer(weather) {
    const container = document.createElement("div");
    container.classList.add("current-weather-container");

    const displayContainer = document.createElement("div");
    displayContainer.classList.add("display-container");
    container.insertAdjacentElement("beforeend", displayContainer);

    const iconImg = document.createElement("img");
    const icon = this._getIcon(weather.condition.code);
    iconImg.setAttribute("src", `../assets/weatherIcons/${icon}`);
    iconImg.classList.add("weather-icon");
    displayContainer.insertAdjacentElement("afterbegin", iconImg);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = weather.condition.description;
    displayContainer.insertAdjacentElement("beforeend", description);

    container.insertAdjacentElement(
      "afterbegin",
      this._createWeatherInformationContainer(weather)
    );
    return container;
  }

  _createWeatherInformationContainer(weather) {
    console.log(weather);
    const container = document.createElement("div");
    container.classList.add("weather-information-container");

    // temperature
    const temperature = document.createElement("h2");
    temperature.textContent = `${weather.temperature}°`;
    container.insertAdjacentElement("afterbegin", temperature);

    //pressure
    const pressureContainer = TextRowView.createElement(
      "pressure",
      `${weather.pressure} hPa`
    );
    container.insertAdjacentElement("beforeend", pressureContainer);

    //humidity
    const humidityContainer = TextRowView.createElement(
      "humidity",
      `${weather.humidity} %`
    );
    container.insertAdjacentElement("beforeend", humidityContainer);

    //wind
    const windContainer = TextRowView.createElement(
      "wind",
      `${weather.windSpeed} m/h`
    );
    container.insertAdjacentElement("beforeend", windContainer);

    return container;
  }

  _getIcon(code) {
    if (code === 1000) return "sunny.png";
    if (code === 1003) return "party-cloudy.png";
    if (code === 1006 || code === 1009) return "cloudy.png";
    if (code === 1030 || code === 1135 || code === 1147) return "fog.png";
    if (
      code === 1063 ||
      code === 1072 ||
      (code >= 1150 && code <= 1207) ||
      (code >= 1240 && code <= 1252)
    )
      return "rain.png";
    if (
      code === 1066 ||
      code === 1069 ||
      code === 1114 ||
      code === 1117 ||
      (code >= 1210 && code <= 1225) ||
      code === 11255 ||
      code === 1258
    )
      return "snowy.png";
    if (
      code === 1087 ||
      code === 1273 ||
      code === 1276 ||
      code === 1279 ||
      code === 1282
    )
      return "storm.png";
    if (code === 1237 || code === 1261 || code === 1264)
      return "ice-pellets.png";
    else return "error.png";
  }

  renderCurrentWeatherContainer(weather) {
    const container = this._createCurrentWeatherContainer(weather);
    this._getParentElement().insertAdjacentElement("beforeend", container);
  }
}

export default new CurrentWeatherView();

/* icons: (current.condition.code)
sunny: 1000
party cloudy: 1003
cloudy: 1006, 1009
mist: 1030, 1135, 1147
rain: 1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207 (1150-1207), 1240, 1243, 1246, 1249, 1252 (1240-1252)
snow: 1066, 1069, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225 (1210-1225), 1255, 1258
thunder: 1087, 1273, 1276, 1279, 1282
ice pellets (grad): 1237, 1261, 1264
*/
