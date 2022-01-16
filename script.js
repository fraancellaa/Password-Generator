// Assignment code here

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
// Space
space = [];

// Variable created to declare choices outside of the if statement
var option;
// convert to uppercase letters
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

// Generating password

function generatePassword() {
  // user input
  enter = prompt("How many characters would you like your password? Choose between 8 and 128 characters.");
  
  //statement
  if (!enter) {
    alert("Value is needed");
  } else if (enter < 8 || enter > 128) {
    // user input is validated
    // user input prompt starts
  enter = prompt("You must choose between 8 and 128");

  } else {
    // if user input is accepted, confirm
    confirmCharacter = confirm("Will this include special characters?");
    confirmNumber = confirm("Will this include numbers?");
    confirmLowercase = confirm("Will this include Lowercase letters?");
    confirmUppercase = confirm("Will this include Uppercase letters?");
  };

  // "If" statement for none of the criteria is selected

  // 4 options selected

if (!confirmCharacter && !confirmLowercase && !confirmUppercase && !confirmNumber) {
  option = alert("You must choose a criteria!");
}
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

// password variable
var password = [];

// random selection of variables & all variables
for (var i =0; i < enter; i++) {
  var pickOption =  option[Math.floor(Math.random() * option.length)];
  password.push(pickOption);
}

var pw = password.join("");
UserInput(pw);
return pw;
}

// password outcome in box
function UserInput(pw) {
  document.getElementById("password").textContent = pw;

}
