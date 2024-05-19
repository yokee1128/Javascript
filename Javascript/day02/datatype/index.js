//  const  변수이름 = 데이터[타입: 기본 + 참조]
// 기본 타입: number, string, boolean(True or False), null(비여있음), undefined(정의되지 않음)

// 타입 변환

// 1] 명시적 타입 변환
// 2] 암묵적 타입 변환

// 숫자화
// 1. Number("1004")                               -명시적
// 2. parseInt(), parseFloat("3.14")               -명시적
//  - parse 해석하세요, Int 정수,  Float 실수
//  - 숫자가 아닌 문자를 만나면 그 즉시 해석 안함
// 3. +                                            -암묵적

// 문자화
// 1. String(123)                                                   -명시적
// 2. something+ "문자" + something ( 문자하나라고 있으면 문자화 )     -암묵적

// 불리언화
// 1. Boolean() /  true or false
// ex) Boolean(100), Boolean(-100), Boolean("스타벅스")  // true

// truthy, falsy
// false: 0, -0, null, undefined, NaN
