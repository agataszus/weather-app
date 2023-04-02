import { setError } from "../../models/weatherModel";
import errorView from "../../views/errorView";
import LoaderView from "../../views/loaderView";
import ToggleForecastView from "../../views/toggleForecastView";
import { toggleDayPickerHiddenClass } from "../DayPicker/toggleDayPickerHiddenClass";

export const controlError = (isError, error) => {
  if (isError) {
    setError(error);
    ToggleForecastView.hide();
    toggleDayPickerHiddenClass();
    errorView.renderError(error);
    return;
  }

  ToggleForecastView.show();
  setError("");
  LoaderView.renderLoader();
};
