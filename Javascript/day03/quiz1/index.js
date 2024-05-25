const div = document.querySelector(".box");
const radiusBtn = document.querySelector(".radius");
const sizeBtn = document.querySelector(".size");
const colorBtn = document.querySelector(".color");

radiusBtn.addEventListener("click", () => {
  radiusBtn.innerText = "둥글게" ? "직각" : "둥글게";
  div.classList.toggle("borderRaidusZero");
  div.classList.toggle("borderRaidusTen");
});

sizeBtn.addEventListener("click", () => {
  sizeBtn.innerText = "늘리기" ? "줄이기" : "늘리기";
  div.classList.toggle("medium");
  div.classList.toggle("large");
});

colorBtn.addEventListener("click", () => {
  colorBtn.innerText = "파란색" ? "빨간색" : "파란색";
  div.classList.toggle("red");
  div.classList.toggle("blue");
});
