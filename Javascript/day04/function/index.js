// 함수: input[str,bool,element,null] -> output[str,bool,element,null]
// 일반함수

// function hello(x) {
//   return `${x} 안녕!`;
// }

// const a = hello("여누"); //여누 안녕
// const b = hello("JS"); //JS 안녕
// console.log(a);
// console.log(b);

// 어떠한 x를 넣으면 +100을 돌려주는 함수
function plus100(x) {
  return x + 100;
}

// 어떠한 x를 넣으면 대문자화 시키고 +'이모지'를 돌려주는 함수
function upperEmoji(x) {
  return x.toUpperCase() + "😊";
}

const c = plus100(300);
const d = upperEmoji("apppe");

console.log(c, d);

// 배열 X를 넣으면 두번째 원소를 돌려주기

function getSecond(x) {
  return x[1];
}

// X를 넣으면 +럭키비키잖앙을 붙여서 돌려주기

function wonyoungThink(x) {
  return x + "럭키비키잖앙";
}

const e = getSecond([1, 2, 3]);
const f = wonyoungThink("오늘");
console.log(e, f);
