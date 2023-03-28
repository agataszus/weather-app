export const SVG_CLASS_NAME_PLACEHOLDER = "SVG_CLASS_NAME_PLACEHOLDER";
import styles from "./iconSmall.module.css";

export const createIconSmallComponent = (markup) => {
  const icon = document.createElement("div");
  icon.classList.add(styles.iconContainer);
  const markupWithClassName = markup.replace(
    SVG_CLASS_NAME_PLACEHOLDER,
    styles.iconSmall
  );
  icon.insertAdjacentHTML("afterbegin", markupWithClassName);

  return icon;
};
