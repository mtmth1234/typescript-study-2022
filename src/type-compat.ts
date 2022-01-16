export {};

let fooComp: any;
let barComp: string = 'typescript';

console.log(typeof fooComp);

fooComp = barComp;

console.log(typeof fooComp);

let fooIncomp: number;
let barIncomp: string = 'typescript';

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
console.log(typeof fooString);
fooString = fooStringLiteral;
console.log(typeof fooString);

let fooNumber: number;
let fooNumberLiteral: 1990 = 1990;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public name: string, public age: number) {}
}

let me: Animal;

me = new Person('name', 20);

console.log({ me });
