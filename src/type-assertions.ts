export {};

let name: any = 'name';

let length = (name as string).length;
console.log(typeof length);
//length = 'foo';
console.log(typeof length);
