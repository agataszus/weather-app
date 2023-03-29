import styles from "./logo.module.css";

export const createLogoComponent = () => {
  const logo = document.createElement("img");
  logo.setAttribute("src", "../../assets/logo.svg");
  logo.classList.add(styles.logo);

  return logo;
};
