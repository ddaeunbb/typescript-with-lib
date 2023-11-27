"use strict";
// 1. 빈 배열인 경우 타입을 지정해주어야한다.
// 'bad'
// const array = [];
// array.push('a');
// 'good'
const array = [];
array.push('a');
// 2. DOM이 있다는 것에 전재산을 건다. (무조건 존재한다고 보증한다 = '!')
const head = document.querySelector("#head");
head.innerHTML = "hello world";
// 하지만 '!' 연산자를 쓰는 것보다 안정성 있게 코드를 짜는 것이 더 좋다.
if (head) {
    head.innerHTML = "hello world";
    console.log(head);
}
