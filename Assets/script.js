// Assignment Code
var generateBtn = document.querySelector("#generate");

const possibilities = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

//empty strings for new password and list of confirmed characters
let password = "";
let tempPossibilities = "";

//generatePassword function:
// - prompt for length and to confirm users character choices
// - if statements to pull characters to tempPossibilities and one character to password
// - for loop to add more characters upto desired length from tempPossibilities
function generatePassword() {
  var numPasswordLength = prompt(
    "Pick a password length between 8 and 128 characters."
  );

  if (numPasswordLength < 8 || numPasswordLength > 128) {
    alert("please pick a value between 8 and 128.");
    return;
  }

  var lowerCaseConfirm = confirm("Do you want to use lower case letters?");
  var upperCaseConfirm = confirm("Do you want to use upper case letters?");
  var numbersCaseConfirm = confirm("Do you want to use numbers?");
  var specialCharCaseConfirm = confirm(
    "Do you want to use special characters?"
  );

  if (lowerCaseConfirm === true) {
    // add the Agreed upon dataset to our temp Acceptable options
    tempPossibilities = tempPossibilities + possibilities.lowerCase;
    // we pull out a single value
    const lowerCaseGen =
      possibilities.lowerCase[
        Math.floor(Math.random() * possibilities.lowerCase.length)
      ];
    password = password + lowerCaseGen;
  }
  if (upperCaseConfirm === true) {
    tempPossibilities = tempPossibilities + possibilities.upperCase;
    const upperCaseGen =
      possibilities.upperCase[
        Math.floor(Math.random() * possibilities.upperCase.length)
      ];
    password = password + upperCaseGen;
  }
  if (numbersCaseConfirm === true) {
    tempPossibilities = tempPossibilities + possibilities.number;
    const numberCaseGen =
      possibilities.number[
        Math.floor(Math.random() * possibilities.number.length)
      ];
    password = password + numberCaseGen;
  }
  if (specialCharCaseConfirm === true) {
    tempPossibilities = tempPossibilities + possibilities.symbol;
    const specialCharGen =
      possibilities.symbol[
        Math.floor(Math.random() * possibilities.symbol.length)
      ];
    password = password + specialCharGen;
  } else if (
    lowerCaseConfirm === false &&
    upperCaseConfirm === false &&
    numbersCaseConfirm === false &&
    specialCharCaseConfirm === false
  ) {
    alert(
      "You must choose at least one type of character to include in your password!"
    );
    return;
  }

  for (let index = password.length; index < numPasswordLength; index++) {
    const char =
      tempPossibilities[Math.floor(Math.random() * tempPossibilities.length)];
    password = password + char;
  }

  return password;

 
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  // Shuffles through the password variable to randomize further 
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  passwordText.value = password;
  console.log(password);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
