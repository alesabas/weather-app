const location = 'Mexico,mx';
const api_key = '8100670c8ea8bf38630d00c1be0adb17';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;