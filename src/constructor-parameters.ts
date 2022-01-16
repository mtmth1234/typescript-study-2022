export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 20);

console.log({ taro });

type PersonType = typeof Person;

console.log(typeof Person);

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['name', 30];
const a = new Person(...profile);
console.log({ a });

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
