import { createSearchComponent } from "../components/search/createSearchComponent";
import { selectSearchInput } from "../components/search/selectSearchInput";
import { selectSearchContainer } from "./selectors/selectSearchContainer";

class SearchView {
  _getParentElement() {
    return selectSearchContainer();
  }

  render() {
    const container = createSearchComponent();
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }

  handleSearchInput(handler) {
    const input = selectSearchInput();
    input?.addEventListener("input", function () {
      handler(input.value);
    });
  }

  handleSearch(handler) {
    this._getParentElement().addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        handler();
        selectSearchInput().value = "";
      }
    });
  }
}

export default new SearchView();
