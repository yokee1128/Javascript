//피자 만들기
// 1. 도우 준비
const prepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우준비 완료");
      success("🥯");
    }, 500);
  });
};

// 2. 토마토 소스

const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토마토 소스 완료");
      success(`${dough}+"🍅"`);
    }, 1000);
  });
};

// 3. 토핑 추가

const addTopping = (doughWithSause) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토핑 추가완료");
      success(`${doughWithSause}+"🧀"`);
    });
  });
};

// 4. 피자 굽기

const bakePizza = (doughWithSauseAddTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 굽기 완료");
      success(`${doughWithSauseAddTopping}+"🥘"`);
    });
  });
};

// 5. 피자 먹기

prepareDough()
  .then((v) => addSauce(v))
  .then((v) => addTopping(v))
  .then((v) => bakePizza(v))
  .then((v) => console.log(`${v} = 🥘`));
