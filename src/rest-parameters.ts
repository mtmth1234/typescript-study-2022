export {};

const reducer = (accumulator: number, currentValue: number): number => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum = (...values: number[]): number => {
  let sum = values.reduce(reducer);
  return sum;
};

console.log(sum(1, 2, 3, 4, 5));
