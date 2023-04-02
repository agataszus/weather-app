import { toggleForecastButtonText } from "../../components/ToggleForecast/createToggleForecastComponent";
import { getIsForecastOn, setIsForecastOn } from "../../models/forecastModel";
import { getCity, getError } from "../../models/weatherModel";
import { updateCurrentWeather } from "../currentWeather/updateCurrentWeather";
import { toggleDayPickerHiddenClass } from "../DayPicker/toggleDayPickerHiddenClass";
import { controlError } from "../error/controlError";
import { controlForecastWeather } from "../forecastWeather/controlForecastWeather";

export const controlToggleForecast = async () => {
  try {
    if (getError()) toggleDayPickerHiddenClass();
    controlError(false);
    const isForecast = getIsForecastOn();
    const city = getCity();
    if (isForecast) await updateCurrentWeather(city);
    else await controlForecastWeather(city);

    setIsForecastOn(!isForecast);
    toggleForecastButtonText(getIsForecastOn());
    toggleDayPickerHiddenClass();
  } catch (error) {
    controlError(true, error);
  }
};
