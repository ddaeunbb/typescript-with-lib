interface Arr<T> {
  forEach(callback: (item: T)=> void, ): void;
  map<S>(callback: (item: T)  => S): S[];
  filter<S extends T>(callback: (v: T) => v is S ): S[];
}



// map 만들기
// const a: Arr<number> = [1,2,3];
// const b = a.map(v => v+1);
// const c = a.map(v => v.toString());
// const d = a.map(v => v % 2 === 0);
// const e: Arr<string> = ['1', '2', '3'];
// const f = e.map(v => +v);


const a: Arr<number> = [1,2,3];
const b = a.filter((v): v is number => v % 2 === 0);
const c: Arr<number | string> = [1, '2', 3, '4', 5];
const d = c.filter((v): v is string => typeof v === 'string');
const predicate = (v: string | number): v is number => typeof v === 'number';
const e = c.filter(predicate); 

