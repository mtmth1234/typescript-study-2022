export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'first';
  static lastName: string = 'last';

  static work() {
    return `This is a work function return strings. My name is ${this.firstName}.`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
