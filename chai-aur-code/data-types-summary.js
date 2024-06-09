// Primitive
// 7 types : String , Number , Boolean , null  , undefined , Symbol , BigInt

const score = 100;
const ScoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
const bigNumber = 9262585345846875n;

// Reference (Non Primitive)
// Arrays , Objects , Functions

const heroes = ["shaktiman", "nagaraj", "doga"];
let myObj = {
  name: "arya",
  age: 20,
};

const myfunction = function () {};

console.log(typeof outsideTemp);
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack => Primitive
// Heap => Non-Primitive

let myYoutubename = "arya";
let anothername = myYoutubename;
anothername = "chairaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "arya@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "archie@google.com";
console.log(userOne.email);
console.log(userTwo.email);
