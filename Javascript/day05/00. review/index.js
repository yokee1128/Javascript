const coffeeMenu = [
  { name: "아메리카노", price: 2500, isRemained: false },
  { name: "라떼", price: 3500, isRemained: false },
  { name: "바닐라라떼", price: 3000, isRemained: true },
];

coffeeMenu.forEach((v) => {
  const newdiv = document.querySelector("div");
  newdiv.className = "coffee";
  const h3 = document.createElement("h3");
  h3.innerText = v.name;
  const h5 = document.createElement("h5");
  h5.innerText = v.price;
  const span = document.createElement("span");
  span.innerText = `남은 재고:${v.isRemained ? "있음" : "없음"}`;

  newdiv.appendChild(h3);
  newdiv.appendChild(h5);
  newdiv.appendChild(span);

  const menu = document.querySelector(".menu");
  menu.appendChild(newdiv);
});
