import { createGoToForecastComponent } from "../components/goToForecast/createGoToForecastComponent";
import { selectMainContainer } from "./selectors/selectMainContainer";

class GoToForecastView {
  _getParentElement() {
    return selectMainContainer();
  }

  render() {
    const container = createGoToForecastComponent();
    this._getParentElement().insertAdjacentElement("beforeend", container);
  }
}

export default new GoToForecastView();
