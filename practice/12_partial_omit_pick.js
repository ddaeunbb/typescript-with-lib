"use strict";
// Partial은 utility-types 중 하나이다.
const zerocho = {
    name: 'zerocho',
    age: 29,
    married: false,
};
// 만약 개인정보의 여부로 인해서, 결혼 여부는 필요가 없다면? (married 속성만 필요가 없다면?)
// Partial: 객체 프로퍼티를 모두 옵셔널로 만들어준다.
// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }
const newZerocho = {
    name: 'zerocho',
    age: 29,
};
// 만약 Partial을 직접적으로 구현한다면?
// type P<T> = {
//   [Key in keyof T]?: T[Key];
// }
//-------------------
// Pick: 프로퍼티 중 일부만 가져오는 것
const newZerocho2 = {
    name: 'zerocho',
    age: 29,
};
//--------------------
// Omit: 프로퍼티 중 일부는 지우겠다는 것
const newZerocho3 = {
    name: 'zerocho',
    age: 29,
};
// S extends keyof any => string, number, symbol
function sum(a, b) {
    return a + b;
}
