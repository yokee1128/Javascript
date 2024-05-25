const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

// fruits.forEach((v) => {
//   console.log(`${v} a 를 포함 ${v.includes("a")}`);
//   //   console.log(`${v} a 를 포함 ${v.includes("a") ? "포함" : "미포함"}`);
// });

// fruits.forEach((v) => {
//   const isSixOver = v.length >= 6;
//   const result = isSixOver ? v.toUpperCase() : v.repeat(2);
//   console.log(result);
// });

fruits.forEach((v) => {
  const upper = v.toUpperCase();
  const repeatTimes = v.repeat(v.length);
  console.log(repeatTimes);


  // consol.log(v.toUpperCase().repeatv.length))
});
