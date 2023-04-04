import searchIconView from "../../views/searchIconView";
import { renderLogo } from "./renderLogo";
import { renderSearch } from "./renderSearch";

export const controlTopBar = () => {
  renderLogo();
  renderSearch();
  searchIconView.render();
};
