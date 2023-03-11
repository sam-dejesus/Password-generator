// Assignment code here
// the function generatePassword() will run the program and return a variable with the value of the password
function generatePassword(){
  // this 4 variables are the types of characters the user can pick from
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()_+";
  var numChars = "1234567890";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// lengthAsString is the var that will take in the user input and turn it into a var
  var lengthAsString = window.prompt("How many characters should the password be?");
  // this if else statement will provide a safty net if the user fails to cancels or doesnt meet the character limit
  if (lengthAsString === null){
    alert("Thank you when ready please click generate password.")
    return null;
  } else if (lengthAsString < 8 || lengthAsString > 128){
    alert("Password needs to be between 8-128 characters long.")
    return null;
  }
  // these vars turn the prompts in variables and turn lengthAsString into a number instead of a string
  var length = parseInt(lengthAsString);
  var special = window.confirm("Want special charachters?");
  var num = window.confirm("Want numbers?");
  var upper = window.confirm("Want upper case?");
  var low = window.confirm("Want lower case?");
  //will catch the options the user picks 
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
  //will start generating the password however if the user fails to pick any options they will be notified 
if (passwordOption === ""){
  alert("I am sorry you must pick at least one option.")
  return null;}
  else if (length >= 8 && length <= 128) {
  for (let i=0; i<length; i++){
    password += passwordOption.charAt(Math.floor(Math.random()* passwordOption.length))
  }
  return password;
} 
else{alert("Please enter a number from 8-128.")}
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
