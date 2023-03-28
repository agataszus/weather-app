import styles from "./weatherDescription.module.css";

export const createWeatherDescriptionComponent = (description) => {
  const descriptionRow = document.createElement("p");
  descriptionRow.classList.add(styles.description);
  descriptionRow.textContent = description;

  return descriptionRow;
};
