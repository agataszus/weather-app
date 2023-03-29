import { createIconSmallComponent } from "../iconSmall/createIconSmallComponent";
import { SVG_CLASS_NAME_PLACEHOLDER } from "../iconSmall/createIconSmallComponent";
import styles from "./error.module.css";

export const createErrorComponent = (error) => {
  const container = document.createElement("div");
  container.classList.add(styles.errorContainer);

  const markup = `
  <svg class="${SVG_CLASS_NAME_PLACEHOLDER} ${styles.errorIcon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
</svg>
  `;
  const iconImg = createIconSmallComponent(markup);
  container.insertAdjacentElement("beforeend", iconImg);

  const message = document.createElement("p");
  message.classList.add(styles.errorMessage);
  message.textContent = error;
  container.insertAdjacentElement("beforeend", message);

  return container;
};

// const container = createErrorComponent(
//   "Error: could not find your search result. Please try another one!"
// );
// console.log(container);
// const main = document.querySelector(".main-container");
// main.innerHTML = "";
// main.insertAdjacentElement("afterbegin", container);
