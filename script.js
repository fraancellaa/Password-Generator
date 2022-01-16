
// Defining variables that will be used
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Special characters
character = ["!" ,  "#" , "%", "*", "+", "." , "$" , "/", "=", "(" , ")", "?"];
// Numerical characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Space for uppercase
space = [];

// Variable created to declare choices outside of the if statement
var option;
// Convert to uppercase letters
var toUpper = function (ltr) {
  return ltr.toUpperCase();
};

// variable for uppercase
letter1 = letter.map(toUpper);

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  pw = generatePassword();
  document.getElementById("password").placeholder = pw;
});

// Calling functions to generate the password

function generatePassword() {
// User input
  enter = prompt("How many characters would you like your password? Choose between 8 and 128 characters.");
  
  // Password statement for requirements
  if (!enter) {
    alert("Value is needed");
  } else if (enter < 8 || enter > 128) {
    // User input is accepted
    // User input prompt starts
  enter = prompt("You must choose between 8 and 128");

  } else {
    // If user input is accepted and validated, confirm
    confirmCharacter = confirm("Will this include special characters?");
    confirmNumber = confirm("Will this include numbers?");
    confirmLowercase = confirm("Will this include Lowercase letters?");
    confirmUppercase = confirm("Will this include Uppercase letters?");
  };

// "If" statement if none of the criteria is selected
// 4 options selected

if (!confirmCharacter && !confirmLowercase && !confirmUppercase && !confirmNumber) {
  option = alert("You must choose a criteria!");
}
// All of the criteria is selected
else if (confirmCharacter && confirmLowercase && confirmUppercase && confirmNumber) {
  option = character.concat(letter, letter1, number);
}
// 3 options selected 
else if (confirmCharacter && confirmUppercase && confirmNumber) {
  option = character.concat(letter1, number);
}
else if (confirmCharacter && confirmLowercase && confirmNumber) {
  option = character.concat(letter, number);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  option = character.concat(letter, letter1);
}
else if (confirmNumber && confirmUppercase && confirmLowercase) {
  option = number.concat(letter1, letter);
}
// 2 options selected
else if (confirmCharacter && confirmUppercase) {
  option = character.concat(letter1);
}
else if (confirmCharacter && confirmLowercase) {
  option = character.concat(letter);
}
else if (confirmCharacter && confirmNumber) {
option = character.concat(number);
}
else if (confirmNumber && confirmUppercase) {
  option = number.concat(letter1);
}
else if (confirmLowercase && confirmNumber) {
option = letter.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
  option = letter.concat(letter1);
}
else if (confirmNumber && confirmLowercase)
option = number.concat(letter);
// 1 option selected
else if (confirmNumber) {
  option = number;
}
else if (confirmCharacter) {
  option = character;
}
else if (confirmLowercase) {
  option = letter;
}
else if (confirmUppercase) {
  option = space.concat(letter1);
};

// Password variable
var password = [];

// Random selection of variables & all variables together
for (var i =0; i < enter; i++) {
  var pickOption =  option[Math.floor(Math.random() * option.length)];
  password.push(pickOption);
}

var pw = password.join("");
UserInput(pw);
return pw;
}

// Provide password outcome in the box
function UserInput(pw) {
  document.getElementById("password").textContent = pw;

}
