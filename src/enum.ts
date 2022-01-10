export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

let m: Months = Months.January;

m = m + 1;

console.log(Months.January);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YERROW = '#FFFF00',
}
let yerrow = COLORS.YERROW;

enum Months {
  test,
  test2,
}
