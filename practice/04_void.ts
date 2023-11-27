// void란 return값을 넣으면 안된다는 뜻
// undefined는 되는데 null은 안됨

// 아래는 에러인 상황
// function a():void {
//   return 3;
// }

interface Human {
  talk: () => void;
}

// 메서드에서 return 값이 있는데도 에러가 발생하지 않고 있음
const human: Human = {
  talk(){ return 3; }
}

// 타입스크립트의 추론: const testReturn: void
// 잘못 타입추론해주고 있음
const testReturn = human.talk();

// 타입 강제 변환방식, 강제변환방식은 as를 사용하는 것을 권장.
const testReturn =  human.talk() as unknown as number;
const testReturn = <number><unknown>human.talk();

// void는 크게 3가지로 구분할 수 있다.
// 1) 리턴값이 void인 경우
// 2) 매개변수인 함수가 void인 경우
// 3) 메서드가 void인 경우

function testFn(callback: () => void): void{

}

// 매개변수인 함수가 리턴값을 반환하고 있는데도 에러가 발생하지 않고 있음
testFn(()=> {
  return '3';
})

// 즉, 결론적으로 함수에 직접적으로 void를 쓰지 않으면 에러가 난다.
// 하지만 메서드나 매개변수의 함수는 void를 쓰고 리턴값이 있어도 에러가 나지 않는다.
// 이때 void는 매개변수의 함수의 리턴값이나 메서드의 리턴갑을 사용하지 않겠다는 의미이다.


// 실전예제
declare function forEach(arr: number[], callback: (el) => undefined): void;
// 아래와 같이 수정하면 에러가 발생하지 않음
declare function forEach(arr: number[], callback: (el) => void): void;

let target: number[] = [];
// 아래는 에러 발생
forEach(target, el => target.push(el));
