class GlobalView {
  handleKeyDownListener(handler) {
    window.addEventListener("keydown", (e) => handler(e));
  }
}
export default new GlobalView();
