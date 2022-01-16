export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'name', underTwenty: false };
console.log(profile);

// let profile: { [index: string]: string | number } = {};
// console.log(profile);

profile.name = 'name';
console.log(profile);

profile.age = 10;
console.log(profile);

profile.nationality = 'japan';
console.log(profile);
