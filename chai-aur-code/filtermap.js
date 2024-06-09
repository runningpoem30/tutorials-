//const coding = ["js", "ruby", "java", "python"];

// const values = coding.forEach((item) => {
//   //console.log(item);
//   return item;
// });

// console.log(values);

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//if u open the scope {} , you will have to use return keyword

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

//console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//const userBooks = books.filter((bk) => bk.genre == "History");

let userBooks = books.filter(
  (bk) => bk.edition >= 1995 && bk.genre === "History"
);

//console.log(userBooks);

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.map((num) => num + 10);

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
//console.log(newNums);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curVal) {
//   console.log(`acc : ${acc} and curval : ${curVal}`);
//   return acc + curVal;
// }, 3);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "mobile dev course",
    price: 9999,
  },
  {
    itemName: "data science",
    price: 19999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
