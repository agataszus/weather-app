import styles from "./search.module.css";

export const selectSearchInput = () => {
  return document.querySelector(`.${styles.searchInput}`);
};
