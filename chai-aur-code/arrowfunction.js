// const user = {
//   username: "arya",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);

// function chai() {
//   let username = "arya";
//   console.log(this.username); //inside function we are not able to use this
// }
// chai();

// const chai = function (){
//   let username = "arya"
//   console.log(this.username)
// }
// chai()

const chai = () => {
  let username = "arya";
  console.log(this);
};

chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "arya" });
console.log(addTwo(3, 4));
