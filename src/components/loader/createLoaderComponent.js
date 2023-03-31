export const createLoaderComponent = () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  const markup = `<div></div><div></div><div></div><div></div>`;
  loader.insertAdjacentHTML("afterbegin", markup);

  return loader;
};
