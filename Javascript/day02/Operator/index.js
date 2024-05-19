// Operator[연산자]
// 산술 연산자
// 할당 연산자 [=, +=, -=, *=, **=, /=, %=]
const a = 3;
let b = 4;
b += 5; // 9 [b = b + 5;]
b -= 4; // 5 [b = b - 4;]

// 비교연산자: boolean으로 귀결됨
// >, <, <=, >=, ==[갇다], !=[다르다]
// ===[타입까지 같다], !==
const c = 5 > 3;
const c1 = 5 == 4; // false
const c2 = 5 != 4; // true
const c3 = 5 === 4; // false

//논리 연산자
// &&[and], ||[or], ![not]
// &&: 모두 true 일때 true
// ||: 하나라도 true 일때 true
const d = 5 > 0 && 3 > 0 && 0 == "0;"; //true
const d1 = 5 > 0 && 3 > 0 && 0 === "0"; //false
const d2 = 5 > 0 || 3 > 0 || 0 === "0"; //false

const d3 = !true; // false
const d4 = !"happy"; // false
const d5 = !!"happy"; // true   => boolean의 [암묵적 터압 캐스팅]

// 삼항연산자
// 조건 ? A : B [조건이 성립되면 A, 아니면 B]
const height = Number(prompt("님 키 몇?"));
const e = height >= 140 ? "탑승 가능" : "불가능";

// es6 이후 연산자
// 1. typeof
console.log(typeof true); // boolean
console.log(typeof e); // string

// 2. Nullish??
const h = prompt("아무거나");
console.log(h ?? "입력하라구");
console.log("아메리카노" ?? "재고없음");
console.log(null ?? "재고없음");
console.log(undefined ?? "재고없음");

// 단축 평가[Short-circuit]

true || "dog"; // true
false || "dog"; // "dog"
true && "dog"; // "dog"
false && "dog"; // false

const unserName = prompt("이름 입력") || "guest";
