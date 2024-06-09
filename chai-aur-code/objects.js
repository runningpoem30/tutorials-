// singleton   constructor

// object literals

const mySym = Symbol("key1");

const JSuser = {
  name: "Arya",
  age: 18,
  location: "Jaipur",
  [mySym]: "mykey1", //to use it as a symbol
  email: "arya@google.com",
};

// console.log(JSuser.name);
// console.log(JSuser["email"]);

// console.log(typeof JSuser[mySym]);

// JSuser.email = "aryahitesh@gmail.com";

JSuser.greeting = function () {
  console.log("hello js user");
};

JSuser.greetingTwo = function () {
  console.log(`hell js user , ${this.name}`);
};

//console.log(JSuser.greeting());
//console.log(JSuser.greetingTwo());

//const tinderUser = new Object(); this is a singleton  object

const tinderUser = {}; //this is a non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Arya";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "somegmail.com",
  fullname: {
    userfullname: {
      firstname: "arya",
      lastname: "pathak",
    },
  },
};
//console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = { obj1, obj2 };
//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

//user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
