const color = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"];

color.forEach((v) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.style.backgroundColor = v;
  box.addEventListener("click", () => {
    alert(`${v} 색이 선택되었습니다.`);
  });

  const palette = document.querySelector(".palette");
  palette.appendChild(newDiv);
});
