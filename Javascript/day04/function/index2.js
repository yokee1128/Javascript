// 함수: input[str,bool,element,null,function] -> output

// 콜백함수: 함수안에 함수 넣음

// function abc(x) {
//   x();
//   return 100;
// }

// function kim(x) {
//   console.log(`김씨 안녕`);
// }

// abc(kim);

const getTen = (x) => 10;
const getOne = (x) => 1;
const abc = (x, y) => x() + y();

abc(getOne, getTen); // 11

const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x} 입니다.`);
};

arr.forEach(test);

arr.forEach((v) => {
  console.log(`${x} 입니다.`);
});



