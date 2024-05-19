// 아메리카노 2500: 수량 - 0 +
// 라떼 3000: 수량 - 0 +
// 바닐라 3000: 수량 - 0 +

// 총액: 0

const americano = document.createElement("span");
const latte = document.createElement("span");
const vanilla = document.createElement("span");
const final_total = document.createElement("h2");

americano.innerText = "아메리카노 2500원";
latte.innerText = "라떼 3000원";
vanilla.innerText = "바닐라 3000원";
const total = document.createElement("h2");
total.innerText = `0`;

const americano_plusBtn = document.createElement("button");
americano_plusBtn.innerText = `+`;
const americano_num = document.createElement("span");
americano_num.innerText = `0`;
const americano_minusBtn = document.createElement("button");
americano_minusBtn.innerText = `-`;

americano_plusBtn.addEventListener("click", () => {
  americano_num.innerText = Number(americano_num.innerText) + 1;
  total.innerText = Number(total.innerText) + 2500;
});

americano_minusBtn.addEventListener("click", () => {
  americano_num.innerText = Number(americano_num.innerText) - 1;
  total.innerText = Number(total.innerText) - 2500;
});

const latte_plusBtn = document.createElement("button");
latte_plusBtn.innerText = `+`;
const latte_num = document.createElement("span");
latte_num.innerText = `0`;
const latte_minusBtn = document.createElement("button");
latte_minusBtn.innerText = `-`;

const latte_total = document.createElement("span");
latte_total.innerText = `0`;

latte_plusBtn.addEventListener("click", () => {
  latte_num.innerText = Number(latte_num.innerText) + 1;
  total.innerText = Number(total.innerText) + 3000;
});

latte_minusBtn.addEventListener("click", () => {
  latte_num.innerText = Number(latte_num.innerText) - 1;
  total.innerText = Number(total.innerText) - 3000;
});

const vanilla_plusBtn = document.createElement("button");
vanilla_plusBtn.innerText = `+`;
const vanilla_num = document.createElement("span");
vanilla_num.innerText = `0`;
const vanilla_minusBtn = document.createElement("button");
vanilla_minusBtn.innerText = `-`;

const vanilla_total = document.createElement("span");
vanilla_total.innerText = `0`;

vanilla_plusBtn.addEventListener("click", () => {
  vanilla_num.innerText = Number(vanilla_num.innerText) + 1;
  total.innerText = Number(total.innerText) + 3500;
});

vanilla_minusBtn.addEventListener("click", () => {
  vanilla_num.innerText = Number(vanilla_num.innerText) - 1;
  total.innerText = Number(total.innerText) - 3500;
});

document.body.appendChild(americano);
document.body.appendChild(americano_minusBtn);
document.body.appendChild(americano_num);
document.body.appendChild(americano_plusBtn);

document.body.appendChild(latte);
document.body.appendChild(latte_minusBtn);
document.body.appendChild(latte_num);
document.body.appendChild(latte_plusBtn);

document.body.appendChild(vanilla);
document.body.appendChild(vanilla_minusBtn);
document.body.appendChild(vanilla_num);
document.body.appendChild(vanilla_plusBtn);

document.body.appendChild(total);
