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

  hide() {
    this._getParentElement().style.opacity = "0";
  }

  show() {
    this._getParentElement().style.opacity = "100%";
  }
}

export default new LogoView();
