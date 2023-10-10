const status = false;
console.log("Task 1");
const promise = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      resolve("Task 2 resolved");
    })
    .catch((error) => {
      console.log(error);
      reject("Task 2 rejected");
    });
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Task 3");
