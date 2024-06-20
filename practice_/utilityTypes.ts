type Currencies = {
  usa: "usd";
  china: "cny";
  ukraine: "uah";
  kz: "tenge";
};

type CurrWithoutUSA = Omit<Currencies, "usa">; // исключения
type CurrentWithoutUSA = Exclude<keyof Currencies, "usa">; // исключения
type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; //фильтрация по свойству

type FadeType = Exclude<MyAnimation, "swipe">; // удаление их union type

type SwipeType = Extract<MyAnimation, "swipe">; // выбор подходящего типа

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "John";
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

type CustomCurrencies = CreateCustomCurr<Currencies>;

const gameData: GameDataCurr = {
  John: {
    customChina: "qqq",
    customKz: "asd",
    customUkraine: "sdf",
    customUsa: "123",
  },
  alex: {
    customChina: "qqq",
    customKz: "asd",
    customUkraine: "sdf",
    customUsa: "123",
  },
};

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
