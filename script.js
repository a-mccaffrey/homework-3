// Assignment Code
var generateBtn = document.querySelector("#generate");

var allLowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var allUpperCaseLetters = allLowerCaseLetters.toUpperCase();
var splitLower = Array.from(allLowerCaseLetters);
var splitUpper = Array.from(allUpperCaseLetters);
var allNumbers = "0123456789";
var splitNumbers = Array.from(allNumbers);
var allSymbols = "!@#$%^&*=-_,'";
var splitSymbols = Array.from(allSymbols);

var chooseLength = "";

// This is the generate password function. This first part serves to get the user to decide what they want.

function generatePassword() {
  var chooseLength = prompt(
    "Please pick a password length between 8 and 128 characters"
  );

  while (chooseLength <= 7 || chooseLength >= 129) {
    alert(
      "You did not enter a value between 8 and 128 characters. Please try again."
    );
    var chooseLength = prompt(
      "Please pick a password length between 8 and 128 characters"
    );
  }

  console.log(chooseLength);

  alert(
    `Next, you will be asked if you want to include uppercase letters, lowercase letters, numbers, or special characters. You must accept at least one category in order to generate your password.`
  );

  // User input for characters

  var upperCase = confirm(
    "Do you want to include uppercase characters? Click OK for Yes and Cancel for No"
  );
  var lowerCase = confirm(
    "Do you want to include lowercase characters? Click OK for Yes and Cancel for No"
  );
  var wantNumbers = confirm(
    "Do you want to include numbers? Click OK for Yes and Cancel for No"
  );
  var specialCharacter = confirm(
    "Do you want to include special characters? Click OK for Yes and Cancel for No"
  );

  console.log(upperCase);
  console.log(lowerCase);
  console.log(wantNumbers);
  console.log(specialCharacter);

  // Loop if they don't agree to at least one option

  while (
    upperCase === false &&
    lowerCase === false &&
    specialCharacter === false &&
    wantNumbers === false
  ) {
    alert("You must click ok for at least one option");
    var upperCase = confirm(
      "Do you want to include uppercase characters? Click OK for Yes and Cancel for No"
    );
    var lowerCase = confirm(
      "Do you want to include lowercase characters? Click OK for Yes and Cancel for No"
    );
    var wantNumbers = confirm(
      "Do you want to include numbers? Click OK for Yes and Cancel for No"
    );
    var specialCharacter = confirm(
      "Do you want to include special characters? Click OK for Yes and Cancel for No"
    );
  }

  // Need to set this up so that the random letters are chosen from each array in a loop 
  // Then the final array is randomly shuffled
  let newArray = `${upperCase ? splitUpper : ''}${lowerCase ? splitLower : ''}${specialCharacter ? splitSymbols: ''}${wantNumbers ? splitNumbers : ''}`;

    
    var randomPassword = "";
    for (let i = 0; i < chooseLength; i++) {
      var rand = Math.floor(Math.random() * chooseLength);
      randomPassword += newArray[rand];
    }
    return randomPassword;
  };
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var randomPassword= document.querySelector("#password");

  randomPassword.value = password;
}

// Add Event Listener to the Generate Button

generateBtn.addEventListener("click", writePassword);