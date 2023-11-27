"use strict";
// void란 return값을 넣으면 안된다는 뜻
// undefined는 되는데 null은 안됨
// 메서드에서 return 값이 있는데도 에러가 발생하지 않고 있음
const human = {
    talk() { return 3; }
};
// 타입스크립트의 추론: const testReturn: void
// 잘못 타입추론해주고 있음
const testReturn = human.talk();
// 타입 강제 변환방식, 강제변환방식은 as를 사용하는 것을 권장.
const testReturn = human.talk();
const testReturn = human.talk();
// void는 크게 3가지로 구분할 수 있다.
// 1) 리턴값이 void인 경우
// 2) 매개변수인 함수가 void인 경우
// 3) 메서드가 void인 경우
function testFn(callback) {
}
// 매개변수인 함수가 리턴값을 반환하고 있는데도 에러가 발생하지 않고 있음
testFn(() => {
    return '3';
});
let target = [];
// 아래는 에러 발생
forEach(target, el => target.push(el));
