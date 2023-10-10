import styles from "./logo.module.css";
import logoSrc from "../../assets/logo.png";

export const createLogoComponent = () => {
  const logo = document.createElement("img");
  logo.setAttribute("src", logoSrc);
  logo.classList.add(styles.logo);

  return logo;
};

