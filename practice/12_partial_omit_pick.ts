// Partial은 utility-types 중 하나이다.

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const zerocho: Profile = {
  name: 'zerocho',
  age: 29,
  married: false,
}

// 만약 개인정보의 여부로 인해서, 결혼 여부는 필요가 없다면? (married 속성만 필요가 없다면?)
// Partial: 객체 프로퍼티를 모두 옵셔널로 만들어준다.
// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }

const newZerocho: Partial<Profile> = {
  name: 'zerocho',
  age: 29,
}

// 만약 Partial을 직접적으로 구현한다면?
// type P<T> = {
//   [Key in keyof T]?: T[Key];
// }

//-------------------
// Pick: 프로퍼티 중 일부만 가져오는 것
const newZerocho2: Pick<Profile, 'name' | 'age'> = {
  name: 'zerocho',
  age: 29,
}

//--------------------
// Omit: 프로퍼티 중 일부는 지우겠다는 것
const newZerocho3: Omit<Profile, 'married'> = {
  name: 'zerocho',
  age: 29,
}

// 실제로 Pick과 Omit을 구현해보자.
// 1) Pick
type P<T, S extends keyof T> = {
  [Key in S]: T[Key];
}

// 2) Omit
// Omit을 작성하기 이전에, Exclude를 알아야한다.
// type A = Exclude<keyof Profile, 'married'>;

// 제네릭간의 삼항 연산자를 사용할 수 있다.
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
type Animal = 'Cat' | 'Dog' | 'Human';
type Mammal = Exclude<Animal, 'Human'>;
type Human = Extract<Animal, 'Cat' | 'Dog'>; // Extract는 추출하는 것

// Omit은 Pick과 Exclude의 조합이다.
type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>> 
// S extends keyof any => string, number, symbol

function sum(a: number, b: number): number {
  return a + b;
}

type ReturnNum = ReturnType<typeof sum> // number