"use strict";
const p1 = Promise.resolve(1).then(a => a + 1).then(a => a + 1).then(a => a.toString());
// Promise<number>
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
    setTimeout(res, 1000);
});
Promise.all([p1, p2, p3]).then(result => {
    console.log(result); // ['3', 2, undefined]
});
// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
// T = [p1, p2, p3]  -> { '0': p1, '1': p2, '2': p3 }
// keyof T = '0' | '1' | '2' | 'length';
