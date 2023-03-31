import { createLoaderComponent } from "../components/loader/createLoaderComponent";
import { selectCurrentWeatherContainer } from "./selectors/selectCurrentWeatherContainer";

class LoaderView {
  _getParentElement() {
    return selectCurrentWeatherContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  renderLoader() {
    this._clear();
    const container = createLoaderComponent();
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }
}

export default new LoaderView();
