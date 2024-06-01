import { data } from "./data.js";

//1. timezone이 europe인 데이터중에서
// ->phone, fullname, ipAddress

const one = data
  .filter(({ timezone }) => timezone.includes("Europe"))
  .map(({ phone, fullName, ipAddress }) => ({ phone, fullName, ipAddress }));
console.log(one);

//2. id가 짝수인 데이터 중에서
// ->timezone[대류만], phone[-빼고], money[$뺴고]를 가져오기

const two = data
  .filter(({ id }) => id % 2 == 0) // id % 2 == 0    =>!(id % 2)
  .map(({ timezone, phone, money }) => ({
    timezone: timezone.split("/")[0],
    phone: [phone.split("-")].join(""), // => phone.replaceAll("-","")
    money: money.split("$")[1], // money.replace("$","")
  }));
console.log(two);

//3. America or Asia 데이터 중에서
//ipAddress[.을 지우고] fullname 앞이름[first name], creditcard로 변경후 가져오기

const three = data
  .filter(
    ({ timezone }) => timezone.includes("America") || timezone.includes("Asia")
  )
  .map(({ ipAddress, fullName, creditcardType: creditcard }) => ({
    ipAddress: [ipAddress.split(".")].join(""), // => ipAddress.replaceAll("-","")
    fullName: fullName.split(" ")[0],
    creditcard,
  }));

console.log(three);

//4. $ 가 2500~50000사이 데이터와 timezone이 Africe인 데이터 중에서
//  timezone[수도만 가져오기] fullNmae 뒤이름[Family name] 가져오기
const four = data
  .filter(({ money, timezone }) => {
    const isValidMoney =
      money.split("$")[1] >= 2500 && money.split("$")[1] >= 2500 <= 50000;
    const isValidTimezone = timezone.includes("Africa");
    return isValidMoney && isValidTimezone;
  })
  .map(({ timezone, fullName }) => ({
    timezone: timezone.split("/")[1],
    fullName: fullName.split(" ")[1],
  }));
console.log(four);

//5. ipAddress 뒷자리 세개의 수의 함이 15이하인 애들 데이터 중에서
//  timezone, fullName, money 가져오기

const five = data
  .filter(({ ipAddress }) => {
    if (ipAddress.split(".")[3].length == 3) {
      const sum =
        ipAddress.split(".")[3].split("")[0] +
          ipAddress.split(".")[3].split("")[1] +
          ipAddress.split(".")[3].split("")[2] <=
        15;
    } else if (ipAddress.split(".")[3].length == 2) {
      const sum =
        ipAddress.split(".")[3].split("")[0] +
          ipAddress.split(".")[3].split("")[1] <=
        15;
    } else {
      const sum = ipAddress.split(".")[3].split("")[0] <= 15;
    }
  })
  .map(({ timezone, fullName, money }) => ({ timezone, fullName, money }));
console.log(five);

const five1 = data
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const laseIndex = ipArr.findLastIndex((v) => v == ".");
    const sum = ipArr
      .splice(laseIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((a, c) => a + c);
    return sum <= 15;
  })
  .map(({ timezone, fullName, money, ipAddress }) => ({
    timezone,
    fullName,
    money,
    ipAddress,
  }));

console.log(five1);
