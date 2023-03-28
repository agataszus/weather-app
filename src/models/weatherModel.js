export const state = {
  coords: {},
  city: "",
  weather: {},
  error: "", // or null
};

export const getWeather = () => state.weather;

export const getCity = () => state.city;

export const setWeather = (weather) => {
  state.weather = weather;
};

export const setCity = (city) => {
  state.city = city;
};

export const setCoords = (coords) => {
  state.coords = coords;
};
