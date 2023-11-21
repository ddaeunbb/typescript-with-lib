function a(this: Window | typeof obj, params: string) {
  console.log(this.name);
}

const obj = { name : 'zerocho'};
const b = a.bind(obj);
b() // 'zerocho'

//This를 추출하는 타입
type T = ThisParameterType<typeof a>
// this만 사라지게하는 OmitThisParameter
type NoThis = OmitThisParameter<typeof a>;