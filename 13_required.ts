interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}

type Name = Profile['name'];

// required는 프로퍼티가 필수이도록 만든다.
// '-'는 modifier로 ? 앞에 붙으면 모든 옵셔널을 제거하는 것을 뜻한다.
// '-?'
// '+?'는 '?' 과 동일하다.
type R<T> = {
  [Key in keyof T]-?: T[Key];
}

const zerocho: R<Profile> = {
  name: 'zerocho',
  age: 29,
  married: false,
}

// readonly는 앞에 붙여주면 된다.
type Read<T> = {
  readonly [Key in keyof T]-?: T[Key];
}

const zerocho1: Read<Profile> = {
  name: 'zerocho',
  age: 29,
  married: false,
}

// record
interface Obj {
  [key: string]: number;
}

// key는 symbol, string, number만 와야하기 때문에 extends keyof any 를 써줘야한다.
type MockR<T extends keyof any, S> = {
  [Key in T]: S;
}

// 위의 인터페이스를 간단하게 적은 것
const a: Record<string, number> = { a: 3, b: 5, c: 7};


type A = string | null | number | boolean | undefined;
// 타입에서 null과 undefined는 지우고 싶을 때
type B = NonNullable<A>;


// 결론적으로 omit, pick, partial required 는 인터페이스에 적용되는 타입이고
// exclude extract NonNullable은 키에 적용되는 타입이다.

// NonNullable 직접 구현하기
type N<T> = T extends null | undefined ? T: never;