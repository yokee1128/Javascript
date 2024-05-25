const box = document.querySelector(".box");

const color = ["red", "orange", "yellow", "green", "blue"];
const size = ["small", "medium", "large", "x-large", "xx-large"];
const radius = ["borderRaidusZero", "borderRaidusTen", "borderRaidusTwenty"];

color.forEach((v) => {
  const colorBtn = document.createElement("button");
  colorBtn.innerText = v;

  colorBtn.addEventListener("click", () => {
    color.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const color = document.querySelector(".color");
  color.appendChild(colorBtn);
});

size.forEach((v) => {
  const sizeBtn = document.createElement("button");
  sizeBtn.innerText = v;

  sizeBtn.addEventListener("click", () => {
    size.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const size = document.querySelector(".size");
  size.appendChild(sizeBtn);
});

radius.forEach((v) => {
  const radiusBtn = document.createElement("button");
  radiusBtn.innerText = v;

  radiusBtn.addEventListener("click", () => {
    radius.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  const radius = document.querySelector(".radius");
  radius.appendChild(radiusBtn);
});
