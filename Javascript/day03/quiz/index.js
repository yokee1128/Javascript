// const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// fruits.forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.addEventListener("click", () => {
//     window.alert(`${v}과일이 선택되었습니다`);
//   });
//   document.body.appendChild(button);
// });

const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];

coffee.forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.split(" ")[0];
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = Number(total.innerText) + Number(v.split(" ")[1]);
  });
});
