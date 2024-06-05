// структура данных склада с одеждой

type ClothesWarehouse = {
  jackets: "empty" | number;
  hats: "empty" | number;
  socks: "empty" | number;
  pants: "empty" | number;
};

// структура данных склада с канцтоварами

type StationeryWarehouse = {
  scissors: "empty" | number;
  paper: "empty" | boolean;
};

// структура данных склада с бытовой техникой

type AppliancesWarehouse = {
  dishwashers: "empty" | number;
  cookers: "empty" | number;
  mixers: "empty" | number;
};

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

type TotalWarehouse = ClothesWarehouse &
  StationeryWarehouse &
  AppliancesWarehouse & {
    deficit: boolean;
    date: Date;
  };

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 4,
  socks: 4,
  pants: "empty",
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
  let products: string[] = [];

  const result = Object.entries(data)
    .filter((item) => item[1] === "empty")
    .reduce((accum, item) => `${accum} ${item[0]},`, "")
    .slice(0, -1)
    .trim();

  if (result.length) {
    return `We need this items: ${result}`;
  } else {
    return "Everything fine";
  }
}

console.log(printReport(totalData));
