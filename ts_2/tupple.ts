const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: { error: "Error" },
};

const userDataTuple = [true, 30, "john"];


const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

logBrtMsg(userData);

const departments: string[] = ["dev", "design", "marketing"];
const num: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

const departmant = departments[0];

const report = departments
  .filter((d: string) => d !== "dev")
  .map((d: string) => `${d} - done`);

const [first] = report;

console.log(first);
