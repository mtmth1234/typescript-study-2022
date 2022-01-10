export {};

const fun1 = (): number => 43;

let numberAny: any = fun1();
let numberUnknown: unknown = fun1();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
