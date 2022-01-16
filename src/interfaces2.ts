export {};

class A {}
class B {}

class ExA extends A {}

interface C {
  fun1(): void;
}
interface D {
  fun2(): void;
}

class F implements C, D {
  fun1(): void {}
  fun2(): void {}
}

let f = new F();
console.log({ f });
