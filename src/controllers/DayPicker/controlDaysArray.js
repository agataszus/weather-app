import { getDaysArray, setActiveDay } from "../../models/forecastModel";

export const controlDaysArray = (clickedDay) => {
  const daysArray = getDaysArray();
  const clickedIndex = clickedDay ? daysArray.indexOf(clickedDay) : 0;
  setActiveDay(clickedIndex);
  let dayPickerArray = [];

  for (let i = 0; i < 9; i++) {
    const index = clickedIndex - 4 + i;
    if (index < 0 || index > 13) dayPickerArray[i] = "";
    dayPickerArray[i] = daysArray[index];
  }

  return dayPickerArray;
};
