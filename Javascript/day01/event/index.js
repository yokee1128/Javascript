// event (click,  keyboard, mousemove,...)

// const button = document.createElement("button");
// button.innerText = "버튼이야";

// button.addEventListener("mouseover", () => {
//   console.log("mouse 올라감");
// });

// document.body.appendChild(button);

// div태그 - width / height: 100px bg:red
//        - event: click bg: blue

// const divTag = document.createElement("div");
// divTag.style.width = "100px";
// divTag.style.height = "100px";
// divTag.style.backgroundColor = "red";
// document.body.appendChild(divTag);

// divTag.addEventListener("click", () => {
//   divTag.style.backgroundColor = "blue";
// });

// divTag.addEventListener("mouseover", () => {
//   divTag.style.backgroundColor = "blue";
// });

// divTag.addEventListener("mouseleave", () => {
//   divTag.style.backgroundColor = "red";
// });

// button 태그를 만들고, 글은 '파란상자'
// click:  div w/h: 100px bg.blue

// const button = document.createElement("button");
// button.innerText = "파란상자";

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = "blue";
//   document.body.appendChild(box);
// });

// document.body.appendChild(button);

// 버튼을 3가지 만들고, 각각 이름은 색상이름으로
// div w/h :100px , bg:black
// 각각클릭을 하면 div색상 클릭한 버튼 이름의 색상으로 변경

// const button1 = document.createElement("button");
// const button2 = document.createElement("button");
// const button3 = document.createElement("button");

// button1.innerText = "GREEN SEA";
// button2.innerText = "ORANGE";
// button3.innerText = "WISTERIA";

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);

// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "black";
// box.style.marginTop = "20px";
// document.body.appendChild(box);

// button1.addEventListener("click", () => {
//   box.style.backgroundColor = "#16a085";
// });

// button2.addEventListener("click", () => {
//   box.style.backgroundColor = "#f39c12";
// });

// button3.addEventListener("click", () => {
//   box.style.backgroundColor = "#8e44ad";
// });

// div w/h 100px border 1px solid black bg: white
// button => 색깔 추가
// event => prompt 물어봄 색깔 헥사코드 입력

// button[]을 가진 색깔이 나타남.   div의 bg 가 변경됨.

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "white";
box.style.border = "1px solid black";
box.style.margin = "10px";
document.body.appendChild(box);

const button = document.createElement("button");
button.innerText = "색깔 추가";

button.addEventListener("click", () => {
  const userChoice = prompt("버튼이 어떤 색상일가요?");
  const colorButton = document.createElement("button");
  colorButton.innerText = userChoice;
  colorButton.style.backgroundColor = userChoice;
  document.body.appendChild(colorButton);

  colorButton.addEventListener("click", () => {
    box.style.backgroundColor = userChoice;
  });
});

document.body.appendChild(button);
