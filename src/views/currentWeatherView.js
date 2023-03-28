import { createCurrentWeatherComponent } from "../components/currentWeather/createCurrentWeatherComponent";
import { selectCurrentWeatherContainer } from "./selectors/selectCurrentWeatherContainer";

class CurrentWeatherView {
  _getParentElement() {
    return selectCurrentWeatherContainer();
  }

  clear() {
    this._getParentElement().innerHTML = "";
  }

  renderCurrentWeather(weather) {
    this.clear();
    const currentWeatherComponent = createCurrentWeatherComponent(weather);
    this._getParentElement().insertAdjacentElement(
      "afterbegin",
      currentWeatherComponent
    );
  }
}

export default new CurrentWeatherView();
