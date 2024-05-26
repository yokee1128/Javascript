const arr = [1, 3, 5, 7, 9];
const fruit = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];

// forEach, every, some, map, filter

// map(바꾸기)
const a1 = arr.map((v) => v * 10);
console.log(a1);

const a2 = arr.map((v) => v ** v);
console.log(a2);

// a3 6보다 작으면 10을 더하고, 아니면 10 곱해주기
const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
console.log(a3);

// 짝수 2배, 홀수 3배
const a4 = arr.map((v, i) => (i % 2 == 1 ? v * 3 : v * 2));
console.log(a4);

// 알파벳 a를 포함하면 대문자, 아니면 글자수
const a5 = fruit.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));
console.log(a5);

// filter
const b1 = arr.filter((v) => v > 5);
console.log(b1);

const b2 = arr.filter((v, i) => i % 2 == 0);
console.log(b2);

// 과일에서 6글자이상인 애들만 걸러주고, 대문자화 시키기
const r1 = fruit.filter((v) => v.length >= 6).map((v) => v.toUpperCase());
console.log(r1);

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

// 과일에서 6글자만 걸러주고, 모든 요소들이 a,o를 포함하는지 궁금?
const r2 = fruit
  .filter((v) => v.length == 6)
  .every((v) => alpha.some((x) => v.includes(x)));

console.log(r2);

// String(), Number(),Boolean()

const c = Array(10); // ()안에 배열의 요소 개수
const c1 = Array(10).fill(0); // .fill 요소추가하기

const c2 = Array(10)
  .fill(0)
  .map((v, i) => i); //[0~9]

console.log(c2);

// 0~100까지 홀수만
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);
console.log(c3);

//str -> array
// 첫번째 방법 .split
const d = "americano".split("");

// 두번째 방법 .Array.from("str")
const d1 = Array.from("americano");

// 세번째 방법 [..."str"]
const d2 = [..."americano"];

// a를 빼준 배열
const d3 = [..."americano"].filter((v) => v != "a");
console.log(d3);

// array -> string
// 첫번째 방법: [].join("")
const e = ["coffee", "cookie"].join("");
console.log(e);

// 두번째 방법: []. toString("")
const e1 = ["coffee", "cookie"].toString(); //  결과에 요소사이에 ,(쉼표)있음, 못 빼줌

// str <-> array

//"cccCCC" -> "CCCccc"
const change = (word) =>
  [...word]
    .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");

// n k result
// 10 3 [3,6,9]
// 15 5 [5,10,15]

const result = (n, k) =>
  Array(n)
    .fill(0) // 값을 채워줘
    .map((v, i) => i + 1) // 값을 변경하기
    .filter((v) => v % k == 0); // 원하는 값들만 거르기

console.log(result(112, 3));

// const a = (Array(100)
//   .fill(0)
//   .map((v, i) => i + 1).reduce = (acc, curr) => acc + curr);
// console.log(a);

const fruit1 = ["apple", "banana", "orange", "kiwi", "tomato"];

const f = [...fruit1.join("")]
  .filter((v) => v != "a")
  .filter((v) => v != "e")
  .filter((v) => v != "o")
  .filter((v) => v != "i")
  .filter((v) => v != "u")
  .join("");
console.log(f);

const f1 = fruit1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);
console.log(f1);
