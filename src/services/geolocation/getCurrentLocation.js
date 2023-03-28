export const getCurrentLocation = function () {
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
