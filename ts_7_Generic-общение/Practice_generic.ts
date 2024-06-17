// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

enum FigureName {
  Rect = "rect",
  Circle = "circle",
  Triangles = "triangles",
  Line = "line",
}

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

interface Figure {
  name: FigureName;
}

function calculateAmountOfFigures<T extends Figure>(
  figure: T[]
): AmountOfFigures {
  const amount: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figure.forEach((fig) => {
    switch (fig.name) {
      case FigureName.Rect:
        amount.squares++;
        break;
      case FigureName.Circle:
        amount.circles++;
        break;
      case FigureName.Triangles:
        amount.triangles++;
        break;
      default:
        amount.others++;
        break;
    }
  });

  return amount;
}

interface CustomFigure extends Figure {
  data?: {};
}

const data: CustomFigure[] = [
  {
    name: FigureName.Rect,
    data: { a: 5, b: 10 },
  },
  {
    name: FigureName.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: FigureName.Triangles,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: FigureName.Line,
    data: { l: 15 },
  },
  {
    name: FigureName.Circle,
    data: { r: 10 },
  },
  {
    name: FigureName.Circle,
    data: { r: 5 },
  },
  {
    name: FigureName.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureName.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureName.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureName.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureName.Triangles,
  },
];

console.log(calculateAmountOfFigures(data));
