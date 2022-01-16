export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

class A {
  constructor(public name: string, public age: number) {}
}

console.log(echo<string>('aaaa'));
console.log(echo<number>(100));
console.log(echo<boolean>(true));

let a = new A('name', 20);
console.log(echo<A>(a));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello').echo());
console.log(new Mirror<boolean>(true).echo());
