import { createDateTileComponent } from "../dateTile/createDateTileComponent";

import styles from "./dateTilesRow.module.css";

export const createDateTilesRowComponent = (statusArray, daysArray) => {
  const container = document.createElement("div");
  container.classList.add(styles.dateTilesRow);

  daysArray.forEach((number, i) => {
    const tile = createDateTileComponent(statusArray[i], number);
    tile.setAttribute("data-id", number);

    if (i === 0 || i === 8) tile.style.opacity = "20%";
    if (i === 1 || i === 7) tile.style.opacity = "40%";
    if (i === 2 || i === 6) tile.style.opacity = "60%";
    if (i === 3 || i === 5) tile.style.opacity = "80%";
    if (i === 4) tile.classList.add(styles.tileActive);

    container.insertAdjacentElement("beforeend", tile);
  });

  return container;
};
