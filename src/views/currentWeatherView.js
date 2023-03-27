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
export default new CurrentWeatherView();
