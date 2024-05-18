// js가 html을 만들기 위한 장소
// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안에 내용은 클릭! body에 나타내기
// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.padding = "10px";
// button.style.fontSize = "20px";
// button.innerText = "click!";
// document.body.appendChild(button);

// const a = prompt("점심 뭐먹을거?");
// console.log(a);

// prompt 로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffeffed
// div -> width: 100px, height = 100px, background: red

// const color = prompt("What's the color?");

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = color;
// document.body.appendChild(div);

// 폰트 색깔 물어보고,
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기

// const buttonColor = prompt("버튼이 무슨색일가?");
// const buttonText = prompt("버튼 이름이 뭘가?");

// const button = document.createElement("button");
// button.innerText = buttonText;
// button.style.color = buttonColor;
// button.style.padding = "10px";
// button.style.fontSize = "16px";
// document.body.appendChild(button);

// 높이 물어보기 100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div태그로 위의 내용을 고려해서 나타내기

const height = prompt("높이가 몇px 이야?");
const width = prompt("넓이가 몇px 이야?");
const backgroundColor = prompt("배경색이 뭐야?");
const text = prompt("내용이 뭘가?");

const box = document.createElement("div");
box.style.width = width;
box.style.height = height;
box.style.backgroundColor = backgroundColor;
box.innerText = text;
document.body.appendChild(box);
