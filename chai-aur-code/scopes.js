// var c = 300;
let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
//console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "arya";

  function two() {
    const webstie = "youtube";
    console.log(username);
  }

  //console.log(wesbite);

  //two();
}
one();

// if (true) {
//   const username = "arya";
//   if (username === "arya") {
//     const website = "youtube";
//     console.log(username + website);
//   }
//   //console.log(website);
// }
//console.log(username);
//++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++

console.log(addone(5));
console.log(addTwo(5));

function addone(num) {
  return num + 1;
}
addone(5);

const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
