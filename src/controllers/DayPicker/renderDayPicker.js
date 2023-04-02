import DayPickerView from "../../views/dayPickerView";
import { controlDaysArray } from "./controlDaysArray";

export const renderDayPicker = (day) => {
  const array = controlDaysArray(day);
  DayPickerView.render(array);
};
