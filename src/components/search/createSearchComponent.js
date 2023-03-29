import { createIconSmallComponent } from "../iconSmall/createIconSmallComponent";
import { SVG_CLASS_NAME_PLACEHOLDER } from "../iconSmall/createIconSmallComponent";
import styles from "./search.module.css";

export const createSearchComponent = () => {
  const container = document.createElement("div");
  container.classList.add(styles.searchContainer);

  const markup = `
  <svg class="${SVG_CLASS_NAME_PLACEHOLDER} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>

  `;
  const icon = createIconSmallComponent(markup);
  container.insertAdjacentElement("beforeend", icon);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search Your Location");
  input.classList.add(styles.searchInput);
  container.insertAdjacentElement("beforeend", input);

  return container;
};
