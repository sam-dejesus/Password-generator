// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
var chars = ["a","b","c","d","e","f","g","h",'i',"j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialChars = ["!","@","#","$","%","^","&","*","(",")"];
var numChars = [0,1,2,3,4,5,6,7,8,9]
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

function password(){
var getspecial = window.confirm("want special charachters");
if(getspecial === true){
  ;
}
var getNum = window.confirm("want numbers");
if(getNum === true){
  ;
}
var getupper = window.confirm("want upper case");
if(getupper === true){
  ;
}
var passLength = window.prompt("how many characters");
if(getspecial === true){
  ;
}
}
  

function start(){
  if( window.confirm("need a new password")){
    password();
  }
}
