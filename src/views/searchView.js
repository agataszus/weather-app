import { createSearchComponent } from "../components/search/createSearchComponent";
import { selectSearchContainer } from "./selectors/selectSearchContainer";

class SearchView {
  _getParentElement() {
    return selectSearchContainer();
  }

  render() {
    const container = createSearchComponent();
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }
}

export default new SearchView();
