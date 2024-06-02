const inputTag = document.querySelector(".inputTag");

// mine
// inputTag.addEventListener("input", (e) => {
//   const inputLength = e.target.value.length;
//   // cosnt {length} = e.target.value.length
//   if (inputLength < 4) {
//     const span = document.querySelector(".info");
//     info.innerText = "글자가 짧습니다.";
//     info.style.color = "red";
//   } else if (inputLength >= 4 && inputLength <= 10) {
//     const span = document.querySelector(".info");
//     info.innerText = "글자수가 충분합니다.";
//     info.style.color = "green";
//   } else {
//     const span = document.querySelector(".info");
//     info.innerText = "글자가 깁니다.";
//     info.style.color = "red";
//   }
//   info;

//   //   console.log(e.target.value);
// });

// 4~10 글자 사이이면 글자수가 충분합니다.[초록]
// 0~3  글자 사이이면 글자가 짧습니다[빨강]
// 11글자 이상이면 글자가 깁니다.[빨강]

const info = document.querySelector(".info");
inputTag.addEventListener("input", (e) => {
  const { length } = e.target.value;
  const isValidLength = 4 <= length && length <= 10;
  const color = isValidLength ? "green" : "red";
  info.style.color = color;
  if (length < 4) {
    info.innerText = "글자가 짧습니다.";
  } else if (10 < length) {
    info.innerText = "글자가 깁니다.";
  } else {
    info.innerText = "글자수가 충분합니다.";
  }
});
