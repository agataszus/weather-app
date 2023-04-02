import {
  getDaysArray,
  getStatusArray,
  setActiveDay,
} from "../../models/forecastModel";

export const controlDaysAndStatusArrays = (clickedDay) => {
  const daysArray = getDaysArray();
  const statusArray = getStatusArray();
  const clickedIndex = clickedDay ? daysArray.indexOf(clickedDay) : 0;
  setActiveDay(clickedIndex);
  let dayPickerArray = [];
  let statusPickerArray = [];

  for (let i = 0; i < 9; i++) {
    const index = clickedIndex - 4 + i;
    if (index < 0 || index > 13) {
      dayPickerArray[i] = "";
      statusPickerArray[i] = "";
    }
    dayPickerArray[i] = daysArray[index];
    statusPickerArray[i] = statusArray[index];
  }
  return { statusPickerArray, dayPickerArray };
};
