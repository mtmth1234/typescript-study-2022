export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailProfile, 'height'>;

//type Exclude<T, U> = T extends U ? never : T;

type MyOmit = Pick<DetailProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
