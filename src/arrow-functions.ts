export {};

let bmi: (height: number, weight: number, printable: boolean) => number = (
  height: number,
  weight: number,
  printable: boolean = true
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.6, 50, true);
