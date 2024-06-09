// for of

// ["" , "" , ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
//   console.log(num);
// }

// const greeting = "hello world";

// for (const greet of greeting) {
//   console.log(`each char is ${greet}`);
// }

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// const myObject = {
//   game1: "NFS",
//   game2: "spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// } // this doesnt work for iteration of objects

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"];

for (const key in programming) {
  console.log(programming[key]);
}

//+///++++++++++++ for each loop ++++++++++++++++

const coding = ["js", "rb", "py", "java"];

// coding.forEach(function name(item) {
//   console.log(item);
// });

coding.forEach((item) => {
  //console.log(item);
});

// coding.forEach(printMe(item));

coding.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
