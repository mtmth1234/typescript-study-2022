export {};

class VisaCard {
  constructor(readonly owner: string) {}
}

let myCard = new VisaCard('name');
console.log(myCard.owner);
