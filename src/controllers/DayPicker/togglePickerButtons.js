import { getActiveDay } from "../../models/forecastModel";

export const togglePickerButtons = () => {
  const buttonLeft = document.getElementById("button-picker-left");
  const buttonRight = document.getElementById("button-picker-right");
  const activeDay = getActiveDay();
  if (activeDay === 0) {
    buttonLeft.style.opacity = "0";
    return;
  }
  if (activeDay === 13) {
    buttonRight.style.opacity = "0";
    return;
  }
  buttonLeft.style.opacity = "100%";
  buttonRight.style.opacity = "100%";
};
