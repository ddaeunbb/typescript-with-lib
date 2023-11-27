interface A {
  readonly a: string;
  b: string;
}

const aaaa: A = { a: 'hello', b: 'world'};
// 읽기 전용 속성이므로 'a'에 할당할 수 없습니다.
// aaaa.a = 'ddd'


type B = { a: string; b: string; c: string, d: string};
// 위와 같이 모든 속성이 하나의 속성으로 통일됐으면 좋겠을 때는 인덱스드 시그니처를 사용한다.
// 모든 키는 string, 값도 string
type C = { [key: string]: string;}
const bbbb:C = {a: 'aaa', b: 'bbb'}

// 좀 더 심화해서 key값도 제한할 수 있다.
// 이때 사용되는 것이 맵드타입스
type D = 'Human' | 'Mammal' | 'Animal';
type E = { [key in D]: string};
const eeee: E = {Human: 'daeun', Mammal: 'elephant', Animal: 'monkey'};