import { setSearchInput } from "../../models/searchModel";

export const controlSearchInput = (input) => {
  if (!input) return;
  setSearchInput(input);
};
