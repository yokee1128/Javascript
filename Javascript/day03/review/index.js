// counter -10 ~ 10 ,[10,-10] RED 그외에서 Black

const plusBtn = document.querySelector(".minusBtn");
const minusBtn = document.querySelector(".plusBtn");
const result = document.querySelector(".num");

minusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < -10 ? num + 1 : num;
  result.innerText = newNum;
  result.style.color = newNum == -10 ? "red" : "balck";
});

plusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num + 1 : num;
  result.innerText = newNum;
  result.style.color = newNum == 10 ? "red" : "balck";
});

