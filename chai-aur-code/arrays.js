const myArray = [0, 1, 2, 3, 4, 5];

//const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArray[1]);

// Array methods
//myArray.push(6);
//console.log(myArray);

//myArray.pop();

// myArray.unshift(9);
// //console.log(myArray);

// //myArray.shift();

// console.log(myArray);
// console.log(myArray.includes(9));

// console.log("A", myArray);

// const myn1 = myArray.slice(1, 3);
// console.log(myn1);

// const myn2 = myArray.splice(1, 3);
// console.log(myn2);
// console.log(myArray);

const marvelHeros = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];
//marvelHeros.push(dc);
//console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dc);
// console.log(allHeros);

const all_new_heroes = [...marvelHeros, ...dc];
console.log(all_new_heroes);

const anotherArray = [12, 34, 56, [4, 5, 6], 7];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.from("arya"));
