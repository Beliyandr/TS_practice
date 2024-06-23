var jsonText = '{"name":"Text", "data":4}';
var objFromJson = JSON.parse(jsonText);
var objFromJson2 = JSON.stringify(jsonText);
// console.log(objFromJson);
// console.log(objFromJson2);
var toDoList = [];
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((responce) => responce.json())
//   .then((json) => {
//     if ("id" in json) {
//       toDoList.push(json);
//     }
//     console.log(toDoList);
//   });
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (responce) { return responce.json(); })
    .then(function (json) {
    if ("id" in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(toDoList);
});
