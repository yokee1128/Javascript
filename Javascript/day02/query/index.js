// const a = document.querySelector(".box");
// // const b = document.getElementsByClassName("box");
// a.addEventListener("click", () => {
//     console
// }
// )

// const minusBtn = document.querySelector(".minus");

// const plusBtn = document.querySelector(".plus");

// minusBtn.addEventListener("click", () => {
//   const numSpan = document.querySelector(".number");
//   const number = Number(numSpan.innerText) - 1;
//   numSpan.innerText = number === -1 ? 0 : number;
// });

// // 왜 ===로 하고 ==로 안헀을가?

// plusBtn.addEventListener("click", () => {
//   const numSpan = document.querySelector(".number");
//   numSpan.innerText = Number(numSpan.innerText) + 1;
// });

const xMark = document.querySelector(".xMark");
const barBtn = document.querySelector(".bar");
xMark.style.display = "none";

barBtn.addEventListener("click", () => {
  xMark.style.display = "block";
  barBtn.style.display = "none";
});

xMark.addEventListener("click", () => {
  barBtn.style.display = "block";
  xMark.style.display = "none";
});
