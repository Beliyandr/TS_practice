interface User {
  login: string;
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

let dbName: string;

// function sendUserData(obj: User, db?: string): void {
//   console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
// }
sendUserData(user, "sdfasdf");

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
  dbName = "1234";
  console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
}
