"use strict";
// map 만들기
// const a: Arr<number> = [1,2,3];
// const b = a.map(v => v+1);
// const c = a.map(v => v.toString());
// const d = a.map(v => v % 2 === 0);
// const e: Arr<string> = ['1', '2', '3'];
// const f = e.map(v => +v);
const a = [1, 2, 3];
const b = a.filter((v) => v % 2 === 0);
const c = [1, '2', 3, '4', 5];
const d = c.filter((v) => typeof v === 'string');
const predicate = (v) => typeof v === 'number';
const e = c.filter(predicate);
