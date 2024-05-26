// 화살표 함수[arrow function]
// ()=>{}

const plus100 = (x) => {
  return x + 100;
};

// 위에꺼 간단하게 요약=> const plus100 = (x) => x + 100;

const getThird = (x) => x[2];

const toLower = (x) => x.toLowerCase() + "😊";

const a = getThird([1, 2, 3]);
const b = toLower("APPLE");
console.log(a, b);
