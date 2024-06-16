function processing<T>(data: T): T {
  return data;
}

interface ProcessingFn {
  <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const num: Smth<number> = 5;

// type User<T> = {
//   login: T;
//   age: number;
// };

interface ParentsOfUser {
  mother: string;
  father: string;
}

interface User<ParrentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParrentsData;
}

const user: User<{ mother: string; father: string; married: boolean }> = {
  login: "Admin",
  age: 10,
  parents: {
    mother: "Anna",
    father: "no data",
    married: true,
  },
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5, 5, 5];

// const depositMoney = <T extends number | string>(amount: T): T => {
//   console.log(`req to serve with amount: ${amount}`);
//   return amount;
// };

// depositMoney(500);
// depositMoney("500");

const depositMoney = (amount: number | string): number | string => {
  console.log(`req to serve with amount: ${amount}`);
  return amount;
};

depositMoney(500);
depositMoney("500");
depositMoney(false);
