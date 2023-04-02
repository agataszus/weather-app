const state = {
  forecast: [],
  activeDay: null,
  lastDay: null,
  isForecastOn: false,
  daysArray: null,
  statusArray: null,
  firstDayValue: null,
  lastDayValue: null,
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

export const setDaysArray = (array) => {
  state.daysArray = array;
};

export const getDaysArray = () => state.daysArray;

export const setStatusArray = (array) => {
  state.statusArray = array;
};

export const getStatusArray = () => state.statusArray;

export const setFirstDayValue = (value) => {
  state.firstDayValue = value;
};

export const getFirstDayValue = () => state.firstDayValue;

export const setLastDayValue = (value) => {
  state.lastDayValue = value;
};

export const getLastDayValue = () => state.lastDayValue;
