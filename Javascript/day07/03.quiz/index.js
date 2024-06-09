// 앞4자리는 별표
//날짜는 앞에 2024년추가

const getData = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=100");

getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) => {
      bindData(type, number, expiration, owner);
    })
  )
  .catch((v) => console.log("너무 많이 호출했어!"));

const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector(".table");
  //   const year = new Date().getFullYear();
  table.insertAdjacentHTML(
    "beforeend",
    `
        <div class="table_data">
            <div class="type">${type}</div>
            <div class="number">****${number.slice(4, number.length)}</div>
            <div class="expiration">${new Date().getFullYear()}/${expiration}</div>
            <div class="owner">${owner}</div>
        </div>
    `
  );
};
