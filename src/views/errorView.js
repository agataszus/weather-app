import { createErrorComponent } from "../components/error/createErrorComponent";
import { selectCurrentWeatherContainer } from "./selectors/selectCurrentWeatherContainer";

class ErrorView {
  _getParentElement() {
    return selectCurrentWeatherContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  renderError(error) {
    this._clear();
    const container = createErrorComponent(error);
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }

  addRelative() {
    this._getParentElement().classList.add("relative");
  }

  removeRelative() {
    this._getParentElement().classList.remove("relative");
  }
}

export default new ErrorView();
