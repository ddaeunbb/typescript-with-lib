"use strict";
function aa(x) {
    return +x;
}
aa('1'); // 1
// 더 넓은 타입이 aa보다 B임
const ab = aa;
function bb(x) {
    return 0;
}
const baba = bb;
// 리턴타입은 더 넓은 타입이면 대입가능, 매개변수는 더 좁은 타입이면 대입가능
