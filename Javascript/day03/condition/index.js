// // condition [조건]

// const a = Number(prompt("숫자입력"));
// if (a > 0) {
//   alert("0보다 큽니다");
// } else if (a == 0) {
//   alert("0입니다");
// } else {
//   alert("0보다 작습니다.");
// }

// const engScore = Number(prompt("영어점수를 입력해주세요"));

// if (engScore >= 90) {
//   alert("a");
// } else if (engScore >= 80 && engScore < 90) {
//   alert("b");
// } else if (engScore >= 70 && engScore < 80) {
//   alert("c");
// } else if (engScore >= 60 && engScore < 70) {
//   alert("d");
// } else {
//   alert("나락");
// }

// 유저에게  비밀번호 설정을 물어보고,

//1.비밀번호 길이가 8글자 이상이고  // 비밀번호가 짧습니다
//2.특수문자 !,#,$ 가 하나 들어가야 하고 // 특수문자가 없습니다.
//3. I로 시작하고, T로 끝나야 하고 // I와 T를 꼭 시작과 끝에 넣어야 합니다.
//4. 위의 조건을 모두 통과하면 비밀번호 설정완료!

// const special = ["!", "#", "$"];

// special.some((v) => {
//   return v == "!";
// });

// special.every((v) => {
//   return v == "@";
// });

// const number = [1, 2, 3, 4, 5];
// number.some((v) => {
//   return v % 2 == 1;
// });

// special.every((v) => {
//   return v < 6;
// });

// if (userInput.length < 8) {
//   alert("비밀번호가 짧습니다");
// } else if (
//   !userInput.includes("!") ||
//   !userInput.includes("#") ||
//   !userInput.includes("$")                     // 안되는 이유가 뭘가?????
// ) {
//   alert("특수문자가 없습니다. ");
// } else if (!userInput.startsWith("I") || !userInput.endsWith("T")) {
//   alert("I와 T를 꼭 시작과 끝에 넣어야 합니다. ");
// } else {
//   alert("비밀번호 설정완료!");
// }

const userInput = prompt("비밀번호를 입력해주세요");
const isLengthOver8 = userInput.length >= 8;
const hasSpecialChar = ["!", "#", "$"].some((v) => {
  return userInput.includes(v);
});

const isValidIT = userInput.startsWith("I") && userInput.endsWith("T");
if (!isLengthOver8) {
  alert("비밀번호가 짧습니다");
} else if (!hasSpecialChar) {
  alert("특수문자가 없습니다. ");
} else if (!isValidIT) {
  alert("I와 T를 꼭 시작과 끝에 넣어야 합니다. ");
} else {
  alert("비밀번호 설정완료!");
}


