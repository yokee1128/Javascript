//비동기
//Array, Object, Element, Date, Promise

//Promise : 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값 나타냄
//Promise에서 3가지 상태: 대기중[pending], 성공[Fulfilled], 실패[Rejected]

// const a는 성공 ('탕후루')
// cosnt b는 실패('사탕')

// const a = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("탕후루");
//   }, 3000);
// });
// a.then((v)=>{console.log(v)}) //then:성공했으면이라는 뜻
// console.log(a);

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});

b.then((v) => {
  v.name = v.name.toUpperCase(); // name를 대문자화 시키고 return 해주기
  return v;
})
  .then((v) => {
    v.price *= 2; //price를 2배를 해서 return
    return v;
  })
  .then((v) => {
    console.log(v);
  }); //콘솔로그 찌기

const c = new Promise((success, fail) => {
  setTimeout(() => {
    fail({ name: "americano", price: 3000 });
  }, 1000);
});

c.catch((v) => console.log(`catch: ${v}`));
