declare function add(x: number, y: number): number
declare function add(x: number, y: number, z?: number): number
declare function add(x: string, y: string): string


add(1,2);
add(1,2,3);
add('1', '2');


interface Add {
  (x: number, y:number): number;
  (x: string, y: string): string;
}

const adding: Add = (x, y) => x + y;

class A {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any) {
    return x + y;
  }
}