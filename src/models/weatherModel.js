export const state = {
  coords: { latitude: 18.5, longitude: -69.9 },
  city: "",
  weather: {},
  error: null, // or null
};

export const getWeather = () => state.weather;

export const getCity = () => state.city;

export const setWeather = (weather) => {
  state.weather = weather;
};

export const setCity = (city) => {
  state.city = city;
};

export const getCoords = () => state.coords;

export const setCoords = (coords) => {
  state.coords = coords;
};

export const getError = () => state.error;

export const setError = (error) => {
  state.error = error;
};
