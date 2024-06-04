// // function add(x: number, y: number): void {
// //   return;
// // }
// // let res = add(1, 2);
// // console.log(res);
// // type Callback = (x: number, y: number) => number;
// // const multi = (x: number, y: number): number => {
// //   return x + y;
// // };
// // const subtrack: Callback = (x, y) => {
// //   return x - y;
// // };
// // let userName: string = "Dron";
// // userName = 10;
// //!
// /*Function*/
// /*
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// let userNameData: string = "John";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }

// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): string => {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// };

// logBrtMsg(isBirthdayData, userNameData, ageData);
// */
// //! /* Never*/
// /*
// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// let userNameData: string = "John";

// const createError = (msg: string) => {
//   throw new Error(msg);
// };

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday === true) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else if (isBirthday === false) {
//     return "too bad";
//   }
//   return createError("Error");
// }

// logBrtMsg(isBirthdayData, userNameData, ageData);
// */
// //! /* null / undefined*/
// // const test: null = null;
// //! /** symbol / bigint */
// /*
//  const num1: bigint = 1n;
//  const num2: bigint = 2n;

//  const sername: symbol = Symbol("name");

//  console.log(sername);

//  console.log(num1 + num2);
//  */
// //! /* object*/
// // const isBirthdayData: boolean = true;
// // let ageData: number = 40;
// // let userNameData: string = "John";
// // const userData = {
// //   isBirthdayData: true,
// //   ageData: 40,
// //   userNameData: "John",
// //   messages: { error: "Error" },
// // };
// // const createError = (msg: string) => {
// //   throw new Error(msg);
// // };
// // function logBrtMsg({
// //   isBirthdayData,
// //   userNameData,
// //   ageData,
// //   messages: { error },
// // }: {
// //   isBirthdayData: boolean;
// //   ageData: number;
// //   userNameData: string;
// //   messages: { error: string };
// // }): string {
// //   if (isBirthdayData) {
// //     return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
// //   } else {
// //     return createError(error);
// //   }
// // }
// // logBrtMsg(userData);
// //! /** array */
// // const isBirthdayData: boolean = true;
// // let ageData: number = 40;
// // let userNameData: string = "John";
// var userData = {
//   isBirthdayData: true,
//   ageData: 40,
//   userNameData: "John",
//   messages: { error: "Error" },
// };
// var createError = function (msg) {
//   throw new Error(msg);
// };
// function logBrtMsg(_a) {
//   var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
//   if (isBirthdayData) {
//     return "Congrats ".concat(userNameData.toUpperCase(), ", age: ").concat(ageData + 1);
//   }
//   else {
//     return createError(error);
//   }
// }
// logBrtMsg(userData);
// var departments = ["dev", "design", "marketing"];
// var num = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// var departmant = departments[0];
// var report = departments
//   .filter(function (d) { return d !== "dev"; })
//   .map(function (d) { return "".concat(d, " - done"); });

function sortString(words) {
  const wordsArr = words.split(' ');
  const result = [];

  for (let j = 1; j <= wordsArr.length; j++) {
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].includes(j)) {
        result.push(wordsArr[i]);
      }
    }
  }

  return result.join(' ');
}

console.log(sortString('4of Fo1r pe6ople g3ood th5e the2'));
