// 변수(variable): 데이터를 기억하는 공간, 닉네임
// 2015년 나옴. const 이름 = 데이터  [기억 한번만]
// 2015년 나옴. let 이름 = 데이터  [기억 여러번]
// var 이름 = 데이터  [절대절대 쓰지말기]

// const a = 100;
// a = 200; (x)

// let b = 100;
// b = 200; (o)

// 컴퓨터 : 연산[CPU] + 기억[RAM]

// 변수이름 문법
// 1. 예약어[키워드] 안됨 ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 const mint choco(x)  const mintchoco(o)
// 4. 숫자로 시작안됨 ex) const 1a(x) a1(x)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용  ex) const a(x) const button(x)
// 2. 두단어 합칠때, 낙타표기법, 뱁표기법사용
//  - 낙타: milkCoffee
//  - 뱀: milk_coffee
// 3. 소문자로 시작하기

const a = 1; // a는 1
const b = "사이다"; // b는 사이다

// 유저에게 내용과 색깔을 각각 입력받고
// html에 h1~h3 태그 각각 3개 만들기

const userContent = prompt("text 입력해주세요");
const userColor = prompt("색상을 입력해주세요");

const h1tag = document.createElement("h1");
h1tag.innerText = userContent;
h1tag.style.color = userColor;
document.body.appendChild(h1tag);

const h2tag = document.createElement("h2");
h2tag.innerText = userContent;
h2tag.style.color = userColor;
document.body.appendChild(h2tag);

const h3tag = document.createElement("h3");
h3tag.innerText = userContent;
h3tag.style.color = userColor;
document.body.appendChild(h3tag);

const userTag = prompt("어떤 태그를 원해?");
const userTagText = prompt("내용은 뭐로 할가?");
const userTagColor = prompt("폰트 색상은 뭐로 해줄가?");

const userinput = document.createElement(userTag);
userinput.innerText = userTagText;
userinput.style.color = userTagColor;
document.body.appendChild(userinput);
