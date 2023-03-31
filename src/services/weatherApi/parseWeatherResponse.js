import { mapCodeToWeatherStatus } from "../../views/selectors/mapCodeToWeatherStatus";

export const parseWeatherResponse = (data) => {
  const currentData = data.current;
  const weather = {
    condition: {
      description: currentData.condition.text,
    },
    pressure: currentData.pressure_mb,
    humidity: currentData.humidity,
    windSpeed: currentData.wind_mph,
    temperature: Math.round(currentData.temp_c),
    weatherStatus: mapCodeToWeatherStatus(+currentData.condition.code),
  };
  return { weather, city: data.location.name };
};
