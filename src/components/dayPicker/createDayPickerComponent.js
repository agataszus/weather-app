import { createDateTilesRowComponent } from "../dateTilesRow/createDateTilesRowComponent";
import { createIconSmallComponent } from "../iconSmall/createIconSmallComponent";
import { SVG_CLASS_NAME_PLACEHOLDER } from "../iconSmall/createIconSmallComponent";
import styles from "./dayPicker.module.css";

export const createDayPickerComponent = (statusArray, daysArray) => {
  const container = document.createElement("div");
  container.classList.add(styles.dayPicker);

  // button left
  const buttonLeft = document.createElement("button");
  buttonLeft.classList.add(styles.buttonLeft);
  buttonLeft.classList.add(styles.buttonPicker);
  buttonLeft.setAttribute("data-isDayPicker", "");
  buttonLeft.setAttribute("data-id", daysArray[3]);
  buttonLeft.setAttribute("type", "button");
  buttonLeft.textContent = "Previous Day";
  const markupLeft = `<svg class="${SVG_CLASS_NAME_PLACEHOLDER}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `;
  const iconLeft = createIconSmallComponent(markupLeft);
  buttonLeft.insertAdjacentElement("afterbegin", iconLeft);

  // button right
  const buttonRight = document.createElement("button");
  buttonRight.classList.add(styles.buttonRight);
  buttonRight.classList.add(styles.buttonPicker);
  buttonRight.setAttribute("data-isDayPicker", "");
  buttonRight.setAttribute("data-id", daysArray[5]);
  buttonRight.setAttribute("type", "button");
  buttonRight.textContent = "Next Day";
  const markupRight = `<svg class="${SVG_CLASS_NAME_PLACEHOLDER} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  
  `;
  const iconRight = createIconSmallComponent(markupRight);
  buttonRight.insertAdjacentElement("beforeend", iconRight);

  // date tiles row
  const tilesRow = createDateTilesRowComponent(statusArray, daysArray);

  container.insertAdjacentElement("beforeend", buttonLeft);
  container.insertAdjacentElement("beforeend", tilesRow);
  container.insertAdjacentElement("beforeend", buttonRight);

  return container;
};
