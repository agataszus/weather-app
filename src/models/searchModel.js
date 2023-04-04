const state = {
  searchInput: "",
  selectedInput: "",
  isMobile: null,
  isSearchOpen: null,
};

export const setSearchInput = (input) => {
  state.searchInput = input;
};

export const getSearchInput = () => state.searchInput;

export const setSelectedInput = (input) => {
  state.selectedInput = input;
};

export const getSelectedInput = () => state.selectedInput;

export const setIsMobile = (boolean) => {
  state.isMobile = boolean;
};

export const getIsMobile = () => state.isMobile;

export const setIsSearchOpen = (boolean) => {
  state.isSearchOpen = boolean;
};

export const getIsSearchOpen = () => state.isSearchOpen;
