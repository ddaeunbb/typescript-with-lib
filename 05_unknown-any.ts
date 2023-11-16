// any보다는 unknown을 쓰는게 낫다.
// any는 지금 이후로 타입검사 안하겠다 포기 선언이다.
// unknown은 지금 타입을 정확히 모르겠을 때 쓰는 것

interface talkFn {
  talk: () => void;
}

const testA: talkFn = {
  talk(){ return 3; }
}

const testB: unknown = testA.talk();
// unknow은 나중에 타입 지정해주어햔다.
(testB as talkFn).talk();


// error는 대표적인 unknown 이기때문에 타입을 지정해주어야한다.
try{

} catch(error) {
  (error as Error).message 
}