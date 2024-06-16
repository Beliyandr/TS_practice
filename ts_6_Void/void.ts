type voidFunc = () => void;

const retString: voidFunc = () => {
  // ... some magic
  return "string";
};

const s = retString();
console.log(s);

const retNum: voidFunc = () => {
  // ... some magic
  return 5;
};

const n = retNum();
console.log(n);

const names = ["Anna", "John"];

const newArr = names.slice();

names.forEach((name, i, arr) => arr.push("Hey"));

console.log(names);
