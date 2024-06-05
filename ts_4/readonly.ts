interface User {
  readonly login: string;
  password: string;
  age: number;
  // addr?: string;
  addr?: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first!",
  password: "qwerty",
  age: 50,
};

const userFreeze: Readonly<User> = {
  login: "first!",
  password: "qwerty",
  age: 50,
};

// user.login = "dsfg";

let dbName = "234";

sendUserData(user, "sdfasdf");

function sendUserData(obj: User, db?: string): void {
  dbName = "1234";
  console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
}

// class Animal {
//   readonly name: string = "name";
// }

// const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(123);

// const basicPorts: readonly [number, ...string[]] = [3000, "3001", "5555"];
// basicPorts[0] = 5;
// basicPorts.push(123);

// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
// basicPorts[0] = 5;
// basicPorts.push(123);
