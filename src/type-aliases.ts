export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMoji: Mojiretsu = 'aaaa';

console.log(fooMoji);

const example1 = {
  name: 'Name',
  age: 20,
};

type Profile = { name: string; age: number };

const example2: Profile = { name: 'name', age: 10 };

type Profile2 = typeof example1;

let fun1 = (): number => {
  return 1;
};

const e3: { f: () => number; n: number } = {
  f: fun1,
  n: 10,
};
