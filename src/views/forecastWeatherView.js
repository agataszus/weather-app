import { createWeatherCardsRowComponent } from "../components/weatherCardsRow/createWeatherCardsRowComponent";
import { selectCurrentWeatherContainer } from "./selectors/selectCurrentWeatherContainer";

class ForecastWeatherView {
  _getParentElement() {
    return selectCurrentWeatherContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  render(forecast, day, maxDay) {
    this._clear();
    const container = createWeatherCardsRowComponent(forecast, day, maxDay);
    this._getParentElement().insertAdjacentElement("beforeend", container);
  }
}
export default new ForecastWeatherView();
