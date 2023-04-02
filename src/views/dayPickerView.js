import { createDayPickerComponent } from "../components/dayPicker/createDayPickerComponent";
import { selectDayPickerContainer } from "./selectors/selectDayPickerContainer";

class DayPickerView {
  _getParentElement() {
    return selectDayPickerContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  hide() {
    this._getParentElement().classList.add("hidden");
  }

  show() {
    this._getParentElement().classList.remove("hidden");
  }

  render(statusArray, daysArray) {
    this._clear();
    const container = createDayPickerComponent(statusArray, daysArray);
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }

  _handlerSetting(e, data) {
    const target = e.target.closest(`[${data}]`);
    if (!target) return;

    const value = target.closest(`[${data}]`).dataset.id;
    if (value === "undefined") return;
    return value;
  }

  handleDayPicker(handler) {
    this._getParentElement().addEventListener("click", (e) => {
      const valueTile = this._handlerSetting(e, "data-isDayPicker");
      const valueButton = this._handlerSetting(e, "data-isDayPicker");
      if (valueTile) handler(valueTile);
      if (valueButton) handler(valueButton);
    });
  }
}

export default new DayPickerView();
