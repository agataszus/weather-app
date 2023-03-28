export const mapCodeToWeatherStatus = (code) => {
  if (code === 1000) return "sunny";
  if (code === 1003) return "party-cloudy";
  if (code === 1006 || code === 1009) return "cloudy";
  if (code === 1030 || code === 1135 || code === 1147) return "fog";
  if (
    code === 1063 ||
    code === 1072 ||
    (code >= 1150 && code <= 1207) ||
    (code >= 1240 && code <= 1252)
  )
    return "rain";
  if (
    code === 1066 ||
    code === 1069 ||
    code === 1114 ||
    code === 1117 ||
    (code >= 1210 && code <= 1225) ||
    code === 11255 ||
    code === 1258
  )
    return "snowy";
  if (
    code === 1087 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  )
    return "storm";
  if (code === 1237 || code === 1261 || code === 1264) return "ice-pellets";
  else return "error";
};

/* icons: (current.condition.code)
sunny: 1000
party cloudy: 1003
cloudy: 1006, 1009
mist: 1030, 1135, 1147
rain: 1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207 (1150-1207), 1240, 1243, 1246, 1249, 1252 (1240-1252)
snow: 1066, 1069, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225 (1210-1225), 1255, 1258
thunder: 1087, 1273, 1276, 1279, 1282
ice pellets (grad): 1237, 1261, 1264
*/
