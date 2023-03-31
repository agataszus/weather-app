const state = {
  searchInput: "",
  selectedInput: "",
};

export const setSearchInput = (input) => {
  state.searchInput = input;
};

export const getSearchInput = () => state.searchInput;

export const setSelectedInput = (input) => {
  state.selectedInput = input;
};

export const getSelectedInput = () => state.selectedInput;
