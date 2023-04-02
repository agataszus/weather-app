import DayPickerView from "../../views/dayPickerView";
import { controlDaysAndStatusArrays } from "./controlDaysAndStatusArrays";

export const renderDayPicker = (day) => {
  const { statusPickerArray, dayPickerArray } = controlDaysAndStatusArrays(day);
  DayPickerView.render(statusPickerArray, dayPickerArray);
};
