export {};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Profile = {
  name: string;
  age: number;
};

// let a = Profile['name'];

type PartialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

let p: PartialProfile = { name: 'sss' };

type OptionalProfile = Optional<Profile>;
