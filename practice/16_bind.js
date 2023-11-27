"use strict";
function a(params) {
    console.log(this.name);
}
const obj = { name: 'zerocho' };
const b = a.bind(obj);
b(); // 'zerocho'
