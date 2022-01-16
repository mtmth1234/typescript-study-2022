export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('name', 20);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['a', 90];

console.log(profile[1]);
