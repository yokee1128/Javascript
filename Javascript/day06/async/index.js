// Web: 데이터 가져오기, 지도 확인. 시간초 재기...등등
//동기: 동일한 시기
//동기 프로그래밍 코드<->비동기 프로그래밍 코드

//1. settimeout , setInterval
// setTimeout(() => {
//   console.log("하이루");
// }, 1000); // 1000이 1초, 2000이 2초...

// setInterval(() => {
//   console.log("1 초마다");
// }, 1000);

//html에 현재 시간을

setInterval(() => {
  const date = new Date(); // 반드시 serInterval 안에 있어야 함
  const dateTag = document.querySelector(".date");
  dateTag.innerText = date.toLocaleString();
}, 1000);
