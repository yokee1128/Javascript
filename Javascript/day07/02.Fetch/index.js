//fetch
//url을 넣으면 데이터를 돌려주는 함수

const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=100");

// v는 response type
getData
  .then((v) => v.json()) // v를 json화 시킨거
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ street, streetName, country }) =>
      bindData(street, streetName, country)
    )
  )
  .catch((v) => console.log("너무 많이 보내지마.."));
// console.log(data);
// street,streetname,city

// const { data } = a.then((v) => v.json()).then((v) => v);
// console.log(data);

const bindData = (street, streetName, country) => {
  const table = document.querySelector(".table");
  table.insertAdjacentHTML(
    "beforeend",
    `
        <div class="table_data">
            <div class="street">${street}</div>
            <div class="streetName">${streetName}</div>
            <div class="country">${country}</div>
        </div>
    `
  );
};


