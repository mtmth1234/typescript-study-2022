export {};

let profile: { name: string; age: number | null } = {
  name: 'name',
  age: null,
};

profile.age = 100;
profile.age = null;
