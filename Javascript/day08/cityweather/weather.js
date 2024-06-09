const APIkey = "59c55439801dbf2fb58aef1c263d7d70";
const data = [
  { cityName: "korea", lat: 37.51, lon: 126.72 },
  { cityName: "japan", lat: 33.59, lon: 130.4 },
  { cityName: "china", lat: 36.06, lon: 120.3 },
];

const weatherPhoto = {
  Rain: "https://cdn.pixabay.com/photo/2022/06/04/18/15/grass-7242537_960_720.jpg",
  clouds:
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  wind: "https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928_1280.jpg",
  snow: "https://cdn.pixabay.com/photo/2019/10/07/11/26/winter-landscape-4532412_960_720.jpg",
};

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then((main, weather) => ({ main, weather }))
      .then((value) => {
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url(${
          weatherPhoto[value.weather[0].main]
        })`;

        const weather = document.querySelector(".weather_info");
        weather.innerText = `${cityName} weather is ${value.weather[0].main}`;

        const temp = document.querySelector(".temp_info");
        temp.innerText = `${cityName} temp is ${main.temp}`;
      });
  });
});
