import { hasSpecial, isValidLength } from "./util.js";
import { MSG } from "./msg.js";
import { CORLOR } from "./color.js";

const register = document.querySelector(".register");
const validList = [false, false, false];
// const validList1 = [{ id: false }, { pw: false }, { pwch: false }];

const id = document.querySelector(".id");
const id_info = document.querySelector(".id_info");

id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);
  id_info.style.color = isValid ? CORLOR.VALID : CORLOR.INVALID;
  id_info.innerText = isValid ? MSG.ID.VALID : MSG.ID.INVALID;
  validList[0] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw = document.querySelector(".pw");
const pw_info = document.querySelector(".pw_info");
pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);
  pw_info.style.color = isValid ? CORLOR.VALID : CORLOR.INVALID;
  pw_info.innerText = isValid ? MSG.PW.VALID : MSG.PW.INVALID;
  validList[1] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pwch = document.querySelector(".pwch");
const pwch_info = document.querySelector(".pwch_info");
pwch.addEventListener("input", (e) => {
  const { value } = e.target;
  const isValid = pw.value == value;
  pwch_info.style.color = isValid ? CORLOR.VALID : CORLOR.INVALID;
  pwch_info.innerText = isValid ? MSG.PWCH.VALID : MSG.PWCH.INVALID;
  validList[2] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

const pw_eye_button = document.querySelector(".pw_eye_icon");
const pwIcon = document.querySelector(".pwIcon");
pw_eye_button.addEventListener("click", () => {
  pwIcon.classList.toggle("fa-eye");
  pwIcon.classList.toggle("fa-eye-slash");
  pw.type = pw.thpe === "password" ? "text" : "password";
});

const pwch_eye_button = document.querySelector(".pwch_eye_icon");
const pwchIcon = document.querySelector(".pwchIcon");
pwch_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle("fa-eye");
  pwchIcon.classList.toggle("fa-eye-slash");
  pwch.type = pw.thpe === "password" ? "text" : "password";
});
