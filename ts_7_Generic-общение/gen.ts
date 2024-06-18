const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ["1", "2", "3"];

// roarr[0] = "asd";

interface IState {
  data: {
    name: string;
  };
  tag?: string;
}

const state: Partial<IState> = {
  data: { name: "John" },
};

const strictState: Required<IState> = {
  data: { name: "sdf" },
  // tag: "asd",
};

function action(state: Readonly<IState>) {
  state.data.name = "abs";
}
