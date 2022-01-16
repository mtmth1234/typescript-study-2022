export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }

    const fun2 = () => {
      Osaka.fun1();
    };
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }

    export const fun1 = () => {
      return 'fun1';
    };
  }
}

namespace English {
  export class Person {
    constructor(
      public firstname: string,
      public middlename: string,
      public lastname: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('name');
console.log(me.name);

const man = new English.Person('f', 'm', 'l');
console.log({ man });
