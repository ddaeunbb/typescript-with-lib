function startAndEnd<This, Args extends any[], Return>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMemberDecoratorContext) {
  return function replacementMethod(this: This, ...args: Args) {
    console.log('start');
    const result = originalMethod.call(this, ...args);
    console.log('end');
    return result;
  }
}

class A {
  @startAndEnd
  eat() {
    console.log('Eat');
  }
  @startAndEnd
  work() {
    console.log('Work');
  }
  @startAndEnd sleep() {
    console.log('Sleep');
  }
}