export {};

let profile1: object = { name: 'myname' };
profile1 = { birthyear: 1990 };

console.log(profile1);

let profile2: { name: string } = { name: 'myname' };
profile2 = { name: 'testname' };
console.log(profile2);
