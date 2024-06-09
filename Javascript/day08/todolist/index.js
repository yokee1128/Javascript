setInterval(() => {
  const date = new Date(); // 반드시 serInterval 안에 있어야 함

  const datedetail = document.querySelector(".datedetail");
  datedetail.innerText = date.toLocaleDateString();

  const timer = document.querySelector(".timer");
  timer.innerText = date.toLocaleTimeString("it-IT");

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const week = document.querySelector(".week");
  week.innerText = weekday[date.getDay()];
}, 1000);

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  const list = document.querySelector(".list");
  const content = document.querySelector(".content");
  list.innerHTML = "";
});
const list = document.querySelector(".list");
const addbtn = document.querySelector(".addbtn");
addbtn.addEventListener("click", () => {
  const addcontent = prompt("What should you do?");
  const addtime = prompt("When should you completed?");
 
  list.insertAdjacentHTML(
    "beforeend",
    `
    <div class="listUnit">
        <div class="detail">${addcontent}</div>
        <div class="time">${addtime}</div>
        <button class="deletebtn">delete</button>
    </div>
    `
  );


});
  //   const listUnit = document.querySelector(".listUnit");
  const deletebtn = document.querySelector(".deletebtn");
  deletebtn.addEventListener("click", () => {
    list.innerHTML = "";
  });