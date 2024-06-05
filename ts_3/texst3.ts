type Point2D = {
  x: number;
  y?: number;
};

interface Point extends Point2D {
  z: number;
}

type Collection = {
  [key: string]: number;
};

const pointA: Point = {
  x: 0,
  y: 1,
  z: 2,
};

interface Point2D1 {
  x: number;
  y: number;
}

type Point1 = Point2D & {
  z: number;
};
