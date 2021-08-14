// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = ["!", "@", "&", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|", "{", "}", "[", "]"];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guaranteedCharacters = [];
var possibleCharacters = [];
var intermediateArray = [];
var finalPassword = [];

//Function to pull one index from each array Character Array and Store it into Guaranteed Character Array//
function randomGenerator (array){
    
  var index = Math.floor(Math.random() * array.length);
  var call = array[index];
  guaranteedCharacters.push(call); 
  console.log(guaranteedCharacters);
}

//Comparison function to determine if there are special Characters in Final Password//
function comparison (specialCharacters, finalPassword){
  for (var i = 0; i < specialCharacters.length; i++){
    for(var n = 0; n < finalPassword.length; n++){
      if (specialCharacters[i] == finalPassword[n]){
        return true;
      } 
    }
  }
}


function generatePassword(userInput) {
  
  guaranteedCharacters = [];
  possibleCharacters = [];
  intermediateArray = [];
  finalPassword = [];

  var userSpecial = confirm("Would you like to add Special Characters?");
  var userNumbers = confirm("Would you like to add numbers?");
  var userUpper = confirm("Would you like to add Uppercase Letters?");
  var userLower = confirm("Would you like to add lowercase Letters?");

  if (userSpecial === true){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
    randomGenerator(specialCharacters);
  } 

  if (userNumbers == true){
    possibleCharacters = possibleCharacters.concat(numericalCharacters);
    console.log(possibleCharacters);
    randomGenerator(numericalCharacters);
  }

  if(userUpper === true){
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
    console.log(possibleCharacters);
    randomGenerator(uppercaseCharacters);
  }

  if(userLower === true){
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters)
    console.log(possibleCharacters);
    randomGenerator(lowercaseCharacters);
  }
  
  //Function to pull userInput Pass#'s to intermediate array

  for (var i = 0; i < (userInput); i++){
    
    var index = Math.floor(Math.random() * possibleCharacters.length);
    var call = possibleCharacters[index];
  
    intermediateArray.push(call);
  }
  console.log(intermediateArray);

  for (var i = 0; i < guaranteedCharacters.length; i++){
    var n = Math.floor(Math.random() * intermediateArray.length);
    intermediateArray.splice(n, 1, guaranteedCharacters[i]);
  }

  console.log(intermediateArray);
  var finalPassword = intermediateArray;

  if (comparison(specialCharacters, finalPassword) === true){
    var passcontainer = finalPassword.join("");
    console.log(passcontainer);
  } else {
    alert("You need symbols within your password");
    startCollection();
  }
  
  return passcontainer; 
}

function writePassword(userInput) {
  var password = generatePassword(userInput);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function startCollection(){
  
  alert("It's Time To Generate A Password");
  var userInput = prompt("Please enter the desired length of your password");

  if (userInput < 8){
    alert("Length of Password must be greater than 8 Characters")
    startCollection();
  } else if (userInput > 129) {
    alert("Length of Password must be less than 129 Characters")
    startCollection();
  } else {
    console.log("hello")
    writePassword(userInput);
  }  
}

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", startCollection);
