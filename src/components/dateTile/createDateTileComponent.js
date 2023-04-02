import styles from "./dateTile.module.css";

export const createDateTileComponent = (date) => {
  const container = document.createElement("div");
  container.classList.add(styles.dateTile);
  container.setAttribute("data-isDayPicker", "");
  const text = document.createElement("p");
  text.classList.add(styles.dateText);
  // text.textContent = date.slice(8, 10);
  text.textContent = date;
  container.insertAdjacentElement("beforeend", text);

  return container;
};
