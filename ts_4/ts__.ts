const salary: number = 500;

interface UserData {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData = { isBirthdayData: true, ageData: 40, userNameData: "John" };
const arr = ["ss", 5, true];

// const userObj: UserData = JSON.parse(userData);

// console.log(userObj.smt);

const isOkays = true;
let movement: boolean | string = false;

if (isOkays) {
  movement = "moving";
}
