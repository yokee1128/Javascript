const todoListDate = {};
const startDate = new Date(2024, 0, 2);

Array(365)
  .fill(0)
  .forEach((v, i) => {
    // '2024-06-09T06:37:17.676Z'를 T로 짜르고 앞에 가져오기
    const date = startDate.toISOString().split("T")[0];

    // '2024-06-09'를 20240609로 바꾸기
    const pureDate = date.replaceAll("-", "");    
    todoListDate[pureDate] = [];
    startDate.setDate(startDate.getDate() + 1);
  });

console.log(todoListDate);
