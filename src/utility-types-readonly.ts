export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'myName',
  age: 20,
};

me.age++;

console.log({ me });

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'fName',
  age: 18,
};
