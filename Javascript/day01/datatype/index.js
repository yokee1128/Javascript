// const 변수이름 = 데이터[기본 + 참조]
// 1. 기본 타입: 숫자, 문자
// 타입 변환

// const a = 7(숫자);
// const b = 3.14(숫자);
// const c = 12902465734(숫자);

// 2. 문자 타입
// const d = "아메리카노";
// const e = "바닐라라떼";
// const f = `민트초콜렛`;

// const g = "내 최애 음료는: ${e}";
// 문자열 안에 변수처리 => ${변수명}
// console.log(g);

// 프폼포트를 이용해서
// 1. 당신의 MBTI는 ?
// 2. 당신의 최애 음식은 ?
// alert 으로  당신의 mbti, 최애음식 이군요

// const mbti = prompt("당신의 MBTI는?");
// const food = prompt("당신의 최애 음식은?");

// alert(`당신의 mbti는 ${mbti}, 최애음식 ${food}이군요`);

// const date = prompt("오늘의 날짜는 ?");
// const schedule = prompt("오늘의 일정은?");

// alert(`오늘의 날짜는 ${date}, 오늘의 일정은 ${schedule}이군요`);

// 첫번째 수 입력, 두번째 수 입력
// 두수의 합은 ~~입니다.

// const num1 = prompt("첫번째 수");
// const num2 = prompt("두번째 수");
// numFirst = Number(num1);
// numSecond = Number(num2);
// alert(`두 수의 합은 ${numFirst + numSecond}`);

// const num1 = Number(prompt("첫번째 수"));
// const num2 = Number(prompt("두번째 수"));

// alert(`두 수의 합은 ${num1 + num1}`);

//  몇살이셈? ->20
// html에 h1 태그로 된 2005년생이시군요

const age = Number(prompt("나이가 어떻게 되시나요?"));
const h1tagInfo = document.createElement("h1");
h1tagInfo.innerText = `${2024 - age}년 생이시군요`;
document.body.appendChild(h1tagInfo);

// 정사각형의 한변의 길이 -> 10
// html에 정사각형의 넓이는 100입니다.
const width = Number(prompt("정사각형 한변의 길이는?"));
const h1tagInfo2 = document.createElement("h1");
h1tagInfo2.innerText = `정사각형의 넓이는 ${width * width}`;
document.body.appendChild(h1tagInfo2);
