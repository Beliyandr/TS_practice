type Currencies = {
  usa: "usd";
  china?: "cny";
  ukraine: "uah";
  readonly kz: "tenge";
};

type CreateCustomCurr<T> = {
  -readonly [P in keyof T]-?: string | number;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   ukraine: string;
//   kz: string;
// };

// type СопоставимыйТип = {
//   [ПроизвольныйИдентификатор in Множество]: ПроиизвольныйТипДанных;
// };

type Keys = "name" | "age" | "role";

type User = {
  [K in Keys]: string;
};

const alex: User = {
  name: "Alex",
  age: "25",
  role: "admin",
};
