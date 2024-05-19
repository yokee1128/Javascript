// prompt에 아무것도 넣지 않으면, 아무것도 입력 안했어요!

// 1. 영어점수를 입력받고, 60점이상 합격입니다. 아래면 불합격입니다.

// 2. 정수를 입력받고, 양수인지 음수인지 알려주기

// 3. 두 정수를 입력받고 큰 수를 출력하기

// 4. 정수를 입력받고, 절대값으로 바꾸기

// 5. 정수를 입력 받고, 홀수인지 짝수인지 알려주기

//  x = (a !== null && a !== undefined) ? a : b;

// Number로 변형시 0으로 된다??어떻게야 null 값으로 될가?

const eng = Number(prompt("영어점수는?")) || "아무것도 입력 안했어요!";
console.log(eng);
const engResult = eng >= 60 ? "합격입니다" : "불합격입니다";
console.log(engResult);

// const numType = Number(prompt("0을 제외한 수를 입력하세요"));
// const numTypeResult = numType > 0 ? "양수" : "음수";
// console.log(numTypeResult);

// const num1 = Number(prompt("비교할 첫번째 수 입력:"));
// const num2 = Number(prompt("비교할 첫번째 수 입력:"));
// const sizeCamparison = num1 > num2 ? num1 : num2;
// console.log(sizeCamparison);

// const inputNum = Number(prompt("임의의 수를 입력"));
// const plusNum = inputNum > 0 ? inputNum : -inputNum;
// console.log(plusNum);

// const oddOrEven = Number(prompt("홀수일가 짝수일가?"));
// const typeResult = oddOrEven % 2 == 1 ? "홀수" : "짝수";
// console.log(typeResult);
