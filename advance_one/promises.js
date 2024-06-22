// //creating promise
// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an aysnc task
//   //DB calls , cryptography , network calls
//   setTimeout(function () {
//     console.log("async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("aysnc task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 resolved");
// });

// const PromiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@example.com" });
//   }, 1000);
// });

// PromiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Arya", password: "123" });
//     } else {
//       reject("Error : something went wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("the promise is either resolved or rejected"));

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Javascript", password: "123" });
//     } else {
//       reject("Error : JS  went wrong");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// }

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
// n;

// let a = 10;
// let b = 20;
// let result = a + b;
// async function getData() {
//   let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(await resultFromServer.json());
// }

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// getData();
