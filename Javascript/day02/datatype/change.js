// div w/h100 bg
// - +

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";

const widthMinusBtn = document.createElement("button");
const widthPhrase = document.createElement("span");
widthPhrase.innerText = "WIDTH";
const widthPlusBtn = document.createElement("button");

const heightMinusBtn = document.createElement("button");
const heightPhrase = document.createElement("span");
heightPhrase.innerText = "height";
const heightPlusBtn = document.createElement("button");

widthMinusBtn.innerText = `-`;
widthPlusBtn.innerText = `+`;

heightMinusBtn.innerText = `-`;
heightPlusBtn.innerText = `+`;

widthMinusBtn.addEventListener("click", () => {
  box.style.width = parseInt(box.style.width) - 1 + "px";
});

widthPlusBtn.addEventListener("click", () => {
  box.style.width = parseInt(box.style.width) + 1 + "px";
});

heightMinusBtn.addEventListener("click", () => {
  box.style.height = parseInt(box.style.height) - 1 + "px";
});

heightPlusBtn.addEventListener("click", () => {
  box.style.height = parseInt(box.style.height) + 1 + "px";
});

document.body.appendChild(box);
document.body.appendChild(widthMinusBtn);
document.body.appendChild(widthPhrase);
document.body.appendChild(widthPlusBtn);

document.body.appendChild(heightMinusBtn);
document.body.appendChild(heightPhrase);
document.body.appendChild(heightPlusBtn);
