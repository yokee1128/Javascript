const friends = ["kim", "lee", "park"];

// Mine
// const title = document.createElement("h1");
// title.innerText = "My Friend";
// document.body.appendChild(title);

// friends.forEach((v) => {
//   const ul = document.createElement("ul");
//   ul.innerHTML = `<li>${v}</li>`;
//   document.body.appendChild(ul);
// });

// teacher's
const html = `
    <h1>My Friend</h1>
    <ul>
        ${friends.map((v) => `<li>${v}</li>`).join("")}
    </ul>
`;
document.body.innerHTML = html;

//1. createElement -> appendchild
//2. innerHTML
//3. insertAdjacentHTML

const menu = document.querySelector(",menu");

// afterbegin: 첫 번째 자식 앞에 넣기
// beforeend: 마지막 자식 뒤에 넣기
menu.insertAdjacentHTML();

menu.insertAdjacentHTML("beforeend", html);
