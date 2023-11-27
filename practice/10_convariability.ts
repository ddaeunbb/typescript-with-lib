function aa(x: string): number {
  return +x;
}

aa('1') // 1
type B = (x: string) => number | string;

// 더 넓은 타입이 aa보다 B임
const ab: B = aa;

function bb(x: string | number): number {
  return 0;
}

type BB = (x: string) => number | string;

const baba: BB = bb;


// 리턴타입은 더 넓은 타입이면 대입가능, 매개변수는 더 좁은 타입이면 대입가능
