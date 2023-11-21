function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean} {
  return {x,y,z};
}

// 1. zip함수의 매개변수들의 타입들을 가져오고 싶은 상황
// 하지만 아래는 에러가 뜬다.
// type Params = Parameters<zip>;
// 값이기 때문에 typeof를 적용해주어야한다.
type Params = Parameters<typeof zip>;

// 타입은 배열로 리턴된다.[x: number, y: string, z: boolean]
// 인덱싱으로 접근할 수 있게 됨
type First = Params[0]; // number; 

// Parameters 직접 구현하기
// 첫번째로 들어오는 제네릭은 무조건 함수여야한다.
// (...args: any) => any
type P<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;

// infer는 뭘까?
// 타입스크립트가 알아서 매개변수 자리를 추론하는 것을 뜻한다.
// 추론한 값이 있다면 그 함수를 쓰고, 없으면 쓰지말아라. 의 뜻이다.

// 2. 그렇다면 zip함수의 리턴 타입들을 가져오고 싶다면 어떻게 해야할까?
// 실제로 구현해보기
type Return<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

// 이는 ReturnType으로 구현되어있다.
type Test = ReturnType<typeof zip>


// -----------------
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

class A {
  a: string;
  b: number;
  c: boolean;

  constructor(a: string, b: number, c: boolean){
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const c = new A('daeun', 27, false);
type C = ConstructorParameters<typeof A>
type D = InstanceType<typeof A>;