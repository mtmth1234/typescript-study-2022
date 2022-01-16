export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run.';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `I am a lion. ${super.run()} My speed is ${this.speed}`;
  }
}

let animal = new Animal('a');
console.log(animal);
console.log(animal.run());

let lion = new Lion('l', 80);
console.log(lion);
console.log(lion.run());
