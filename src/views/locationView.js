import { createCityRowComponent } from "../components/cityRow/createCityRowComponent";
import { selectLocationContainer } from "./selectors/selectLocationContainer";

class LocationView {
  _getParentElement() {
    return selectLocationContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  renderLocation(city) {
    this._clear();
    const container = createCityRowComponent(city);
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }
}

export default new LocationView();
