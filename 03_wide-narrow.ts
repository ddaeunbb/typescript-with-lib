// type에서의 넓은타입과 좁은타입
type A = string;
type B = number;
// C는 A와 B보다 넓은 타입이다.
type C = string | number;
// D는 C보다 좁은 타입이다.
type D = string & number;

// 객체에서의 넓은타입과 좁은타입
// 객체는 구체적일수록 좁은타입이다.
type E = { name: string };
type F = { age: number };

// G는 E,F보다 좁은 타입이다.
// type G = E & F
type G = { name: string; age: number;};

// H는 E,F 보다 넓은 타입이다.
type H = E | F;
const abc: G = { name: 'daeun', age: 12};

// 잉여속성검사
// 객체리터럴로 바로 대입하게 되면 잉여속성검사를 하게 된다.
interface I { a: string; }

// 잉여속성검사로 인해 에러가 발생한다.
// const iObj: I = { a: 'daeun', b: 'kim'}

// 아래로 설정하면 에러가 발생하지 않음.
const iObj = { a: 'hello', b: 'world' };
const iObj2: I = iObj;