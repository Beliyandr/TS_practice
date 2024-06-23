const jsonText = '{"name":"Text", "data":4}';

const objFromJson = JSON.parse(jsonText);
const objFromJson2 = JSON.stringify(jsonText);

// console.log(objFromJson);
// console.log(objFromJson2);

let toDoList: ToDO[] = [];

interface ToDO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((responce) => responce.json())
//   .then((json) => {
//     if ("id" in json) {
//       toDoList.push(json);
//     }
//     console.log(toDoList);
//   });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((responce) => responce.json())
  .then((json) => {
    if ("id" in json) {
      toDoList.push(json);
    } else if (Array.isArray(json)) {
      toDoList = json;
    } else {
      console.log(`${json} - is a string`);
    }
    console.log(toDoList);
  });

const promise = new Promise<string>((resolve, reject) => {
  resolve("test");
});

promise.then((value) => {
  console.log(value.toLocaleLowerCase());
});



