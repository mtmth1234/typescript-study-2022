export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter2 = {
  battingAverage: number;
};

const men1: Pitcher1 = {
  throwingSpeed: 154,
};

const men2: Batter2 = {
  battingAverage: 0.367,
};

// type ToWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type ToWayPlayer = Pitcher1 & Batter2;

const men3: ToWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
