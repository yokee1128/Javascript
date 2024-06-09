setInterval(() => {
  const date = new Date(); // 반드시 serInterval 안에 있어야 함
  const timer = document.querySelector(".timer");
  timer.innerText = date.toLocaleTimeString("it-IT");
}, 1000);
