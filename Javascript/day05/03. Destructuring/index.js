//destrucruring :분해함
//배열 구조 분해
const week = ["월", "화", "수", "목", "금"];
// const [monday, ...rest] = week; //월, 나머지
// const [monday, tuesday, ...rest] = week; // 월, 화 나머지
// const [monday, rest] = week; //월,화

// // 객체분해
// const kimbab = {
//   name: "참치김밥",
//   ingredients: ["참치", "김", "밥", "계란"],
//   price: 4000,
//   sidedish: {
//     main: "김치",
//     soup: "된장국",
//   },
// };

// //구조분해후 renaming
// // const { name: kimbabName, price, ingredients, sidedish } = kimbab;

// const [tuna, ...rest] = kimbab.ingredients;
// const { soup: koreanSoup } = kimbab.sidedish;

// const {
//   sidedish: { main, soup },
// } = kimbab;
// console.log(main);

const user = [
  { id: 1, name: "Alice", age: 25, nation: "china" },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

//1. v를 쓰지않고 forEach 로 이름과 나이 콘솔로 나타내기

user.forEach(({ name, age }) => console.log(`${name} and ${age}`));

user.forEach(({ name: englishName, age: KoreanAge }) =>
  console.log(`${englishName} and ${KoreanAge}`)
);

//2. user에서 id제거 -> [id,name,age]를 [name,age]로 대체
const ori = user.map(({ name, age }) => {
  return { name: name, age: age };
});

const a = user.map(({ name, age }) => ({ name: name, age: age }));
const b = user.map(({ name, age }) => ({ name, age })); // a와 b는 똑같음. key와 value 동일하면 생략가능
const c = user.map(({ name, age }) => ({ english: name, old: age }));
const d = user.map(({ name: english, age: old }) => ({ english, old }));
console.log(a);

const e = user.map(({ name, age, nation = "Korenan" }) => ({
  name,
  age,
  nation,
}));
console.log(e);
