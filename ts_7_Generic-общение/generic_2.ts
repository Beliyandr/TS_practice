function processingData<T, S>(data: T[], options: S): string {
  data.length;
  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;

    case "number":
      return `${data}, speed: ${options}`;
      break;

    default:
      return "Not Valid";
  }
}

let res1 = processingData([1], "fast");
let res2 = processingData(["1"], "slow");
const res3 = processingData<number, string>([10], "slow");

function processing<T>(data: T): T {
  return data;
}

interface ProcessingFn {
  <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;

interface DataSaver {
  // processing: typeof processing;
  processing: ProcessingFn;
}

const saver: DataSaver = {
  // processing(data) {
  //   console.log(data);
  //   return data;
  // },

  processing: processing,
};
