type Toppings =
  | "cheese"
  | "peppers"
  | "salami"
  | "pepperoni"
  | "mushrooms"
  | "olives ";

interface Order {
  name: string;
  toppings: Toppings[];
}

class Pizza {
  createdOn: Date = new Date();

  constructor(public name: string, public toppings: Toppings[]) {}
}

class PizzaMaker {
  static create({ name, toppings }: Order): Pizza {
    return new Pizza(name, toppings);
  }
}

const dataA: Order = {
  name: "Margarita",
  toppings: ["cheese", "pepperoni", "peppers"],
};

// PizzaMaker.create(dataA);

const pizza = PizzaMaker.create(dataA);

console.log(pizza);
