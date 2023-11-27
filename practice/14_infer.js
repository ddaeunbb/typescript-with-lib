"use strict";
function zip(x, y, z) {
    return { x, y, z };
}
// -----------------
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
class A {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
const c = new A('daeun', 27, false);
