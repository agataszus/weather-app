const state = {
  forecast: [],
  activeDay: null,
  lastDay: null,
  isForecastOn: false,
};

export const setForecast = (forecast) => {
  state.forecast = forecast;
};

export const getForecast = () => state.forecast;

export const setActiveDay = (day) => {
  state.activeDay = day;
};

export const getActiveDay = () => state.activeDay;

export const setLastDay = (day) => {
  state.lastDay = day;
};

export const getLastDay = () => state.lastDay;

export const setIsForecastOn = (boolean) => {
  state.isForecastOn = boolean;
};

export const getIsForecastOn = () => state.isForecastOn;
