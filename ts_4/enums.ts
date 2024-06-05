// const TOP = "Top";
// const RIGHT = "Right";

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunc {
  EASE = "ease",
  EASE_IN = `${EASE}-in`,
  LINEAR = "linear",
}

enum TimingFuncN {
  EASE = 1,
  EASE_IN = 2,
  LINEAR = 3,
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.BOTTOM) {
    console.log(tFunc);
  }
  console.log(tFunc);
}

frame("id", Directions.BOTTOM, TimingFunc.LINEAR);
