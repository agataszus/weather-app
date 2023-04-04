import { createLoupeComponent } from "../components/loupe/createLoupeComponent";
import { selectSearchIconContainer } from "./selectors/selectSearchIconContainer";

class SearchIconView {
  loupe = null;

  _getParentElement() {
    return selectSearchIconContainer();
  }

  _clear() {
    this._getParentElement().innerHTML = "";
  }

  render(isSearchOpen) {
    this._clear();
    this.loupe = createLoupeComponent(isSearchOpen);
    this._getParentElement().insertAdjacentElement("beforeend", this.loupe);
  }

  handle(handler) {
    this._getParentElement().addEventListener("click", handler);
  }
}

export default new SearchIconView();
