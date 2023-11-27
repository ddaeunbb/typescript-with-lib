"use strict";
const abc = { name: 'daeun', age: 12 };
// 잉여속성검사로 인해 에러가 발생한다.
// const iObj: I = { a: 'daeun', b: 'kim'}
// 아래로 설정하면 에러가 발생하지 않음.
const iObj = { a: 'hello', b: 'world' };
const iObj2 = iObj;
