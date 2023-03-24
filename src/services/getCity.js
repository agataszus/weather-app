import { BASE_URL, CURRENT_API, API_KEY } from "../constans/constans";

export const getCity = async function (coords) {
  const response = await fetch(
    `${BASE_URL}${CURRENT_API}?KEY=${API_KEY}&q=${coords.lat},${coords.lng}`
  );
  const data = await response.json();
  const city = data.location.name;
  return city;
};
