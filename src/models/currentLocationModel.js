export const state = {
  coords: {},
};

const getCurrentLocation = function () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        function (position) {
          resolve(position.coords);
        },
        function () {
          reject(new Error("Could not get your position"));
        }
      );
  });
};

export const getCoords = async function () {
  try {
    const { latitude: lat, longitude: lng } = await getCurrentLocation();
    state.coords.lat = lat;
    state.coords.lng = lng;
    return state.coords;
  } catch {
    console.error(error);
  }
};
