//  string, array, element, obj

// const objname = {
//     key1 : value1,
//     key2 : value2,
//     ...,
//     keyn : valuen
// }

// key 는 숫자도 가능함
// value 의 타입은 제한이 없음
//  - "str"
//  - Number
//  - [array]
//  - {Object}
// publishedYear:{
//     year:
//     month:
//     day:
// }

const book = {
  smallButtons: ["소득공제"],
  title: "자바스크립트는 왜 그 모양일까?",
  subTitle:
    "더글러스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
  author: {
    real: "더글러스 크락포드",
    editor: "박수현",
  },
  publishedCompany: "인시던트",
  publishedDate: {
    year: 2020,
    monty: 5,
    day: 25,
  },
  rate: 6,
  reveiw: 1,
  saleIndex: 288,
};

// 데이터 가져오기
// 1. dot 연산자
console.log(book.title);
console.log(book.author.editor);

// 2.bracket 연산자
console.log(book["title"]);
console.log(book["author"]["editor"]);

// 데이터추가
book.isBestSeller = true;

console.log(book["isBestSeller"]);

// 데이터 지우기
delete book.subTitle;

// 키값이 존재여부
"title" in book; // true

book.keys(); // key값만 돌려주기
book.values(); // value들만 돌려주기
