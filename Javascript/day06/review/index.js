import { data } from "./data.js";

//1. id 가 홀수이면서 성별이 여성인 데이터 중에서
//language, datetime(월), username을 가져오기

const one = data
  .filter(({ gender }) => id % 2 == 1 && gender == "Female")
  .map(({ language, datetime, username }) => ({
    language,
    datetime: datetime.split("/")[0],
    username,
  }));

console.log(one);

//2. usename이 알파벳 k or z가 들어있고, 성별이 남성인 데이터 중에서
// datetima(년도), username, usernamelength.

const two = data
  .filter(
    ({ username, gender }) =>
      (username.includes("k") || username.includes("z")) && gender == "Male"
  )
  .map(({ datetime, username }) => ({
    datetime: datetime.split("/")[2],
    username,
    usernamelength: username.length,
  }));
console.log(two);
