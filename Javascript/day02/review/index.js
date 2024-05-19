// 1. 두 수를 각각 입력받고, 합, 차, 곱을  html에
// h2 태그로 3개 각각 나타내기, 폰트 색깔은 하늘색

// const num1 = Number(prompt("첫번째 숫자는?"));
// const num2 = Number(prompt("첫번째 숫자는?"));

// const result1 = document.createElement("h2");
// const result2 = document.createElement("h2");
// const result3 = document.createElement("h2");

// result1.innerText = `두 수의 합은 ${num1 + num2}`;
// result2.innerText = `두 수의 차는 ${num1 - num2}`;
// result3.innerText = `두 수의 곱은 ${num1 * num2}`;
// result1.style.color = "skyblue";
// result2.style.color = "skyblue";
// result3.style.color = "skyblue";

// document.body.appendChild(result1);
// document.body.appendChild(result2);
// document.body.appendChild(result3);

// 2. 밑변과 높이를 각각 입력받고, 정삼각형의 넓이를
// html에 div태그로 나타내기, 폰트 사이즈는 20px
// 폰트색깔은 초록색

// const bottom = Number(prompt("정삼각형의 밑변은?"));
// const height = Number(prompt("정삼각형의 높이는?"));

// const result = document.createElement("div");

// result.innerText = `정삼각형의 넓이는 ${(bottom * height) / 2}`;
// result.style.fontSize = "20px";
// result.style.color = "green";

// document.body.appendChild(result);

// - 0 + 형태의 COUNTER  만들기

const minusButton = document.createElement("button");
const num = document.createElement("h4");
const plusButton = document.createElement("button");

minusButton.innerText = `-`;
num.innerText = `0`;
plusButton.innerText = `+`;

document.body.appendChild(minusButton);
document.body.appendChild(num);
document.body.appendChild(plusButton);

minusButton.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});

plusButton.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});
