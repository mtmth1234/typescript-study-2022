export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('me', 20);
console.log(me);
