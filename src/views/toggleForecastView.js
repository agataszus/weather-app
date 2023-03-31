import { createToggleForecastComponent } from "../components/ToggleForecast/createToggleForecastComponent";
import { selectMainContainer } from "./selectors/selectMainContainer";

class ToggleForecastView {
  _container = null;

  _getParentElement() {
    return selectMainContainer();
  }

  render() {
    this._container = createToggleForecastComponent();
    this._getParentElement().insertAdjacentElement(
      "beforeend",
      this._container
    );
  }

  hide() {
    this._container.classList.add("hidden");
  }

  show() {
    this._container?.classList.remove("hidden");
  }

  handleGoToForecast(handler) {
    this._container.addEventListener("click", handler);
  }
}

export default new ToggleForecastView();
