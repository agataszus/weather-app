import { setError } from "../../models/weatherModel";
import DayPickerView from "../../views/dayPickerView";
import ErrorView from "../../views/errorView";
import LoaderView from "../../views/loaderView";
import ToggleForecastView from "../../views/toggleForecastView";

export const controlError = (isError, error) => {
  if (isError) {
    setError(error);
    ToggleForecastView.hide();
    DayPickerView.hide();
    ErrorView.renderError(error);
    ErrorView.addRelative();
    return;
  }

  ErrorView.removeRelative();
  ToggleForecastView.show();
  setError("");
  LoaderView.renderLoader();
};
