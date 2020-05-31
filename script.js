// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "'"];

// Write password to the #password input

}

// Make an array with the user preferences
function generateArray1 ()

//Make a random password from the array
function randomPassword() {
  var length = num1,
      charset = array1,
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Password Generator
function generatePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){
    let a1 = prompt("How many characters do you want to enter? Must be between 8 and 128", "0");
    var num1 = parseInt(a1);
  
    if (num1 > 128 &&& < 8){
      var yesUpperCase = confirm("Do you want to use uppercase lettesr?")
      if (yesUpperCase = true){
        return yesUpperCase)
}
    }

  }  
  }
