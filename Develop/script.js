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
var password = document.getElementById("password");
var chars = ["a","b","c","d","e","f","g","h",'i',"j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var specialChars = ["!","@","#","$","%","^","&","*","(",")"];
var numChars = [0,1,2,3,4,5,6,7,8,9]
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

function pass(){
  const length = window.prompt("Type a number", "");
  
  

var special = window.confirm("want special charachters");
if(special === true){
 
}
var Num = window.confirm("want numbers");
if(Num === true){
  
}
var upper = window.confirm("want upper case");
if(upper === true){
  
}
var low = window.confirm("want lower case");
if (low === true){

}
function generatePassword (length, special, num, upper, low) {
  let generatedPassword = "";
  let variationsCount = [num, special,upper,low].length;
  for (let i = 0; i < length; i += variationsCount) {
    if (num) {
      generatedPassword += getRandomnum();
    }
    if (special) {
      generatedPassword += getRandomspecial();
    }
    if (upper){
      generatedPassword += getRandomupper();
    }
    if (low){
      generatedPassword += getRandomLower();
    }
    
  }
  const Password = generatedPassword.slice(0, length);
  return Password;
  
}
document.getElementById("password").value = password;
}
  

function start(){
  if( window.confirm("need a new password")){
    pass();
  }
}
