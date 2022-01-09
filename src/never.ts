export {};

function error(message: string): never {
  throw new Error(message);
}

let test = (message: string): never => {
  throw new Error(message);
};

let foo: void = undefined;
let bar: never = error('only me');
console.log('-----------------------');
console.log(bar);

try {
  let result = error('this is a error test message.');
  console.log({ result });
} catch (error) {
  console.log('handle');
  console.log(error);
}
