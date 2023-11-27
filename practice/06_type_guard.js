"use strict";
class TestClassA {
    aaa() { }
}
class TestClassB {
    bbb() { }
}
// 클래스는 클래스 자체로 type이 될 수 있다.
function aOrB(param) {
    if (param instanceof TestClassA) {
        param.aaa();
    }
}
aOrB(new TestClassA());
aOrB(new TestClassB());
;
;
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ('meow' in a) {
        console.log(a.meow);
    }
}
// is가 있으면 커스텀 타입가드 함수이다.
// 커스텀 타입가드는 if문 안에 쓰는 것이고, typescript한테 정확한 타입이 무엇인지 알려주는 것이다.
const isRejected = (input) => { return input.status === 'rejected'; };
const isFulfilled = (input) => {
    return input.status === 'fulfilled';
};
// const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// Promise -> pending -> settled (fulfiled, rejected)
// fulfiled만 리턴되게 했는데 계속 아래와 같이 타입을 추론하고 있음
// const errors: PromiseSettledResult<string>[]
// const errors = promises.filter((a)=> true);
// 따라서 is를 사용해서 커스텀 타입가드를 설정하면 아래와 같이 제대로 타입추론을 해준다.
// const errors: PromiseFulfilledResult<string>[]
// const errors = promises.filter(isFulfilled);
