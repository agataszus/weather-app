import { getActiveDay } from "../../models/forecastModel";

export const togglePickerButtons = () => {
  const buttonLeft = document.getElementById("button-picker-left");
  const buttonRight = document.getElementById("button-picker-right");
  const activeDay = getActiveDay();
  if (activeDay === 0) {
    buttonLeft.style.visibility = "hidden";
    return;
  }
  if (activeDay === 13) {
    buttonRight.style.visibility = "hidden";
    return;
  }
  buttonLeft.style.visibility = "visible";
  buttonRight.style.visibility = "visible";
};
