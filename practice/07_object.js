"use strict";
// {}, Object는 모든 타입이다 (but null과 undefined는 제외된 것임)
const x = 'hello';
const y = 'daeun';
// 따라서 소문자 object를 사용해야햔다.
// but interface나 type사용하는게 좋음
const z = { name: 'daeun', age: 19 };
const testZ = "hi";
// unknown = {} | null | undefined
if (testZ) {
    // const testZ: {}
    // 여기서 testZ는 객체라는 뜻이 아니라 모든 타입이 가능하다는 뜻이다.
    testZ;
}
else {
    testZ;
}
