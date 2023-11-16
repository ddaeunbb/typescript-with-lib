class AAA {
  a: string;
  b: number;
  constructor(){
    this.a  = '123';
    this.b  = 123;
  }
  method(){
  }
}

// 위와 같은 형태임
class BBB {
  a: string = '123';
  b: number = 123;

  method(){
  
  }
}

class CCC {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }
}
const a = new CCC('123');

type testC = CCC;  // 이때 A는 new AAA()를 뜻한다.
const testc: CCC = new CCC('123'); 

// 클래스 자체를 나타내는 타입은
const selfC: typeof CCC = CCC;

// 즉, 클래스 자체의 타입은 typeof 를 붙어주어야하고
// 클래스이름은 인스턴스를 뜻한다.
