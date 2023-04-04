import { createSearchComponent } from "../components/search/createSearchComponent";
import { selectSearchInput } from "../components/search/selectSearchInput";
import { selectSearchContainer } from "./selectors/selectSearchContainer";

class SearchView {
  container = null;
  loupe = null;

  _getParentElement() {
    return selectSearchContainer();
  }

  render() {
    this.container = createSearchComponent();
    this._getParentElement().insertAdjacentElement(
      "afterbegin",
      this.container
    );
  }

  handleSearchInput(handler) {
    const input = selectSearchInput();
    input?.addEventListener("input", function () {
      handler(input.value);
    });
  }

  showSearch() {
    this.container.style.display = "flex";
  }

  hideSearch() {
    this.container.style.display = "none";
  }

  handleSearch(handler) {
    this._getParentElement().addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        handler();
        selectSearchInput().value = "";
        selectSearchInput().blur();
      }
    });
  }
}

export default new SearchView();
