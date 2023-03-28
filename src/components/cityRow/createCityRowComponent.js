import { createIconSmallComponent } from "../iconSmall/createIconSmallComponent";
import { SVG_CLASS_NAME_PLACEHOLDER } from "../iconSmall/createIconSmallComponent";
import styles from "./cityRow.module.css";

export const createCityRowComponent = (city) => {
  const container = document.createElement("div");
  container.classList.add(styles.location);
  const markup = `
    <svg class="${SVG_CLASS_NAME_PLACEHOLDER}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
    `;
  const locationIcon = createIconSmallComponent(markup);

  const cityName = document.createElement("p");
  cityName.textContent = city;

  container.insertAdjacentElement("beforeend", locationIcon);
  container.insertAdjacentElement("beforeend", cityName);

  return container;
};
