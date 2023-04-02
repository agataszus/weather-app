import {
  getActiveDay,
  getDaysArray,
  getLastDay,
} from "../../models/forecastModel";
import { controlDayPicker } from "./controlDayPicker";

export const controlKeyDownListener = (e) => {
  const activeDayIndex = getActiveDay();
  const daysArray = getDaysArray();
  const lastDayIndex = getLastDay();
  let value;
  if (e.key === "ArrowRight") {
    if (activeDayIndex >= lastDayIndex) return;
    value = daysArray[activeDayIndex + 1];
    controlDayPicker(value);
  }
  if (e.key === "ArrowLeft") {
    if (activeDayIndex === 0) return;
    value = daysArray[activeDayIndex - 1];
    controlDayPicker(value);
  }
};
