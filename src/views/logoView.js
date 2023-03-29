import { createLogoComponent } from "../components/logo/createLogoComponent";
import { selectLogoContainer } from "./selectors/selectLogoContainer";

class LogoView {
  _getParentElement() {
    return selectLogoContainer();
  }

  render() {
    const container = createLogoComponent();
    this._getParentElement().insertAdjacentElement("afterbegin", container);
  }
}

export default new LogoView();
