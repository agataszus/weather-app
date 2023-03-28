import styles from "./textRow.module.css";

export const createTextRowComponent = (keyText, valueText) => {
  const container = document.createElement("div");
  container.classList.add(styles.attributeContainer);

  const attribute = document.createElement("p");
  attribute.classList.add(styles.weatherAttributes);
  attribute.textContent = keyText.toUpperCase();
  container.insertAdjacentElement("beforeend", attribute);

  const value = document.createElement("p");
  value.classList.add(styles.attributeValue);
  value.textContent = valueText;
  container.insertAdjacentElement("beforeend", value);

  return container;
};
