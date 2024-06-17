class User<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== "string") {
      return `I have only name: ${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

const ivan = new User("Ivan", 30);

console.log(ivan.sayMyFullName("Smith"));

const nameData = "Alex";
const ageData = 54;

const Alex = new User<string, number>("Alex", ageData);

class AdminUser<T> extends User<string, number> {
  // constructor(rules: T) {
  //   super(name, age);
  //   this.rules = rules;
  // }
}
