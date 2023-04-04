export const getCurrentLocation = function (coords) {
  return new Promise((resolve) => {
    if (navigator.geolocation)
      navigator.geolocation.watchPosition(
        function (position) {
          resolve(position.coords);
        },
        function () {
          // reject(new Error("Could not get your position"));
          resolve(coords);
        },
        { enableHighAccuracy: true }
      );
  });
};
