// 확실하게 값 자체로 추론하길 바란다면 'as const'를 입력해준다.
// const Direction = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// }

// 추론 되고 있는 값
//const Direction: {
//  Up: number;
//  Down: number;
//  Left: number;
//  Right: number;
//}

const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const

// const Direction: {
//   readonly Up: 0;
//   readonly Down: 1;
//   readonly Left: 2;
//   readonly Right: 3;
// }

// 객체의 key만 타입으로 가져오고 싶은 경우
// const obj = {a: '123', b: 'hello', c: 'world'};
// type Key = keyof typeof obj
// type Key = "a" | "b" | "c"

// 객체의 값을 타입으로 가져오고 싶은 경우
const obj = {a: '123', b: 'hello', c: 'world'};
type Key = typeof obj[keyof typeof obj]
// 'as const'를 적지 않으면 type Key = string 으로 추론된다.
// 따라서 'as const'는 타입을 더 좁히는데 or 명확하게 하는데에 사용되기도 한다.
