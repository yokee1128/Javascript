const americano = document.querySelector(".aOrder");
const latte = document.querySelector(".lOrder");
const vanilla = document.querySelector(".vOrder");
const reorder = document.querySelector(".reOrder");

const total = document.querySelector(".totalNum");

americano.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 3000;
});

latte.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 3500;
});

vanilla.addEventListener("click", () => {
  total.innerText = Number(total.innerText) + 4000;
});

reorder.addEventListener("click", () => {
  total.innerText = 0;
});
