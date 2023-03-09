// Assignment code here
function generatePassword(){

  var lengthAsString = window.prompt("Type a number");
  var length = parseInt(lengthAsString);
  var special = window.confirm("want special charachters");
  var num = window.confirm("want numbers");
  var upper = window.confirm("want upper case");
  var low = window.confirm("want lower case");


  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()_+";
  var numChars = "1234567890";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  


  var password = "";

  for (let i=0; i<length; i++){
    if (special && i % 4 === 0){
      password += specialChars.charAt(Math.floor(Math.random()* specialChars.length));
    } else if (num && i % 4 === 1){
      password += numChars.charAt(Math.floor(Math.random()* numChars.length));
    } else if (upper && i % 4=== 2){
      password += upperChars.charAt(Math.floor(Math.random()* upperChars.length));
    } else if (low && i % 4 === 3){
      password += lowerChars.charAt(Math.floor(Math.random()* lowerChars.length));
    } else {
      i--;
    }
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);




// function generatePassword (length, special, num, upper, low) {
//   let length = window.prompt("Type a number", "");
  
  

//   var special = window.confirm("want special charachters");
//   if(special === true){
   
//   }
//   var Num = window.confirm("want numbers");
//   if(Num === true){
    
//   }
//   var upper = window.confirm("want upper case");
//   if(upper === true){
    
//   }
//   var low = window.confirm("want lower case");
//   if (low === true){
  
//   }
//   let generatedPassword = "";
//   let variationsCount = [num, special,upper,low].length;
//   for (let i = 0; i < length; i += variationsCount) {
//     if (num) {
//       generatedPassword += getRandomnum();
//     }
//     if (special) {
//       generatedPassword += getRandomspecial();
//     }
//     if (upper){
//       generatedPassword += getRandomupper();
//     }
//     if (low){
//       generatedPassword += getRandomLower();
//     }
    
//   }
//   const key = generatedPassword.slice(0, length);
//   return key;
  
// }


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// generateBtn.addEventListener("click", writePassword);
// // function generatedPassword(){
// //   if( window.confirm("need a new password")){
// //     pass();
// //   }
// // }
