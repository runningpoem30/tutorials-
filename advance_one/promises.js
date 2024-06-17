//creating promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an aysnc task
  //DB calls , cryptography , network calls
  setTimeout(function () {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("aysnc task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});


new PromiseThree = new Promise(function(resolve , reject){
  setTimeout(function() {
    resolve({username : "chai" , email : "chai@example.com"})
  } , 1000)
})

PromiseThree.then(function(user){
  console.log(user);
})