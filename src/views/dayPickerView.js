import { createDayPickerComponent } from "../components/dayPicker/createDayPickerComponent";
import { selectDayPickerContainer } from "./selectors/selectDayPickerContainer";

class DayPickerView {
  _getParentElement() {
    return selectDayPickerContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  render(array) {
    const container = createDayPickerComponent(array);
    this._getParentElement().classList.remove("hidden");
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }
}

export default new DayPickerView();
