//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const APIkey = "59c55439801dbf2fb58aef1c263d7d70";

const data = [
  { cityName: "Bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "Fukuoka", lat: 33.59, lon: 130.4 },
  { cityName: "Qingdao", lat: 36.06, lon: 120.3 },
  { cityName: "Taipei", lat: 25.03, lon: 121.56 },
  { cityName: "Sydney", lat: -33.86, lon: 151.2 },
];

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then((value) => value.weather[0].main)
      .then((value) => {
        const weather = document.querySelector(".weather");
        weather.innerText = `${btn.innerText} 현재날씨 ${value}`;
      });
  });
});




