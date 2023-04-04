import {
  getIsSearchOpen,
  setIsMobile,
  setIsSearchOpen,
} from "../../models/searchModel";
import LogoView from "../../views/logoView";
import SearchIconView from "../../views/searchIconView";
import SearchView from "../../views/searchView";

export const controlLoupe = () => {
  const isSearchOpen = getIsSearchOpen();
  SearchIconView.render(isSearchOpen);

  if (isSearchOpen) {
    SearchView.hideSearch();
    LogoView.show();
  } else {
    SearchView.showSearch();
    LogoView.hide();
  }

  setIsMobile(true);
  setIsSearchOpen(!isSearchOpen);
};
