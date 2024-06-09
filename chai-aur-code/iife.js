//Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log("DB CONNECTED");
})();
//pollution due to global scope , we use iife

((name) => {
  console.log(`DB CONNECTED Two ${name} `);
})("arya");
