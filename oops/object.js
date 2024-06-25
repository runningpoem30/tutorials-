function multiplyBy5(num){
  this.num = num
  return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser (username , score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  score++
}
createUser.prototype.printMe = function(){
  console.log(`price is ${this.score}`)

}
const chai = new createUser("chai" , 25)
const tea = new createUser("tea" , 250) 

chai.printMe()


let userOne = {
  email : "arya@gmail",
  upi : "arya@ybl"
}

let userTwo = userOne ;
userTwo.email = "archie@gmail" 
console.log(userOne)
console.log(userTwo)