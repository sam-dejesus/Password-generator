// Assignment code here
function generatePassword(){
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()_+";
  var numChars = "1234567890";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lengthAsString = window.prompt("Type a number");
  var length = parseInt(lengthAsString);
  var special = window.confirm("want special charachters");
  var num = window.confirm("want numbers");
  var upper = window.confirm("want upper case");
  var low = window.confirm("want lower case");
 var passwordOption = ""
 if(special){
  passwordOption += specialChars
 }
 if(num){
  passwordOption += numChars
 }
 if(upper){
  passwordOption += upperChars
 }
 if(low){
  passwordOption += lowerChars
 }

  var password = "";

  for (let i=0; i<length; i++){
    password += passwordOption.charAt(Math.floor(Math.random()* passwordOption.length))
  }
  return password;
}
// if the user says no to an option i can give 
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
