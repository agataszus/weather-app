import { createTextRowComponent } from "../textRow/createTextRowComponent";

/**
 * @param list array of objects with key and value, e.g. `[{key: 'test', value: '123' }, {key: 'test2', value: '321' }]`
 */
export const createTextRowListComponent = (list) => {
  const container = document.createElement("div");
  const rows = list.map(({ key, value }) => createTextRowComponent(key, value));

  for (const element of rows) {
    container.insertAdjacentElement("afterbegin", element);
  }

  return container;
};
