const coffee = "americano";
//포함유무
coffee.includes("cano"); //true

//몇번째 있는지 물어보기
coffee.indexOf("i"); // 4 없으면 -1

//비꾸기
coffee.replace("a", "z"); // a를 z로 바꿔주세요

//해당 값으로 시작하는지
coffee.startsWith("ame"); // ame로 시작하는지 true or false

//해당값으로 끝나는지
coffee.endsWith("cano"); //cano로 끝나는지 true or false

//자르고 돌려주기
coffee.slice(0, 5); // ameri (시작인덱스, 끝나는 인덱스 -1번째 인덱스)

//대소문자 전환
coffee.toUpperCase(); // AMERICANO
coffee.toLowerCase(); // americano

//배열화
coffee.split("i"); // ["amer","cano"]   기준문자 앞뒤고 자르고, 해당 기준문자 제외

//반복
coffee.repeat(3); // 괄호안은 반복횟수
