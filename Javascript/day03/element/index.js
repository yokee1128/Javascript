// 기본: str,number,null,undefined,boolean
// 참조: string, element

// const newDiv = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.innerText = "토요일";
// newDiv.appendChild(h1);

const div = document.querySelector(".box");
console.log(div.classList);
div.classList.forEach((v) => {
  console.log(v);
});

div.classList.add("pretty");
div.classList.remove("large");
div.classList.contains("box");
div.classList.replace("box", "wrapper");
// div.classList.toggle(""); // 있으면 뺴고 없으면 넣어줘
div.classList.toggle("large");
