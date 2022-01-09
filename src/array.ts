export {};

let numbers: number[] = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});

let numbers2: Array<number> = [1, 2, 3];
numbers2.forEach((number) => {
  console.log(number);
});

let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];
strings2.forEach((s) => {
  console.log(s);
});

let strings: Array<string> = ['typescript', 'javascript', 'coffiescript'];

let nijigenhairetsu: number[][] = [
  [1, 2],
  [3, 4],
];

let hairetsu: (number | boolean | string)[] = [1, false, 'test'];
