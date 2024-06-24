const user  = {
  username : "hitesh"  ,
  loginCount : 8,
  signedIn :true,


  getUserDetails : function(){
    //console.log("got user data from databases")
    //console.log(`username : ${this.username}`);
    console.log(this)
  }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this)


// new - constructor function 

function User(username , loginCount , isLoggedIn){
  this.username = username;
  this.LoginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  return this
}
const userOne = new  User("hitesh" , 12 , true)


const userTwo = new User("chaiaur code" , 11 ,false)

console.log(userOne);
console.log(userTwo);

