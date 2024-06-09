function sayMyName() {
  console.log("A");
  console.log("R");
  console.log("Y");
  console.log("A");
}

//sayMyName();

//function addTwoNumbers(number1, number2) {
//console.log(number1 + number2);
//}

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// const result = addTwoNumbers(3, 7);

// console.log("Result:", result);

// function loginUserMessage(username = "sam") {
//   if (username === undefined) {
//     console.log("please enter a username");
//     return;
//   }
//   return `${username} just logged in `;
// }
// console.log(loginUserMessage("arya"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(2, 44, 567, 5000, 60034));

const user = {
  username: "arya",
  price: 199,
};

function handleobject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleobject(user);
handleobject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
