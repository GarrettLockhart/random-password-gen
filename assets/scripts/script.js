var passwordLength = 8;
var charChoices = [];
var numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolList = ['!', '@', '#', '%', '^', '&', '*', '(', ')'];
// prettier-ignore
var upperCaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// prettier-ignore
var lowerCaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var userSelectedPrompt = selectPrompts();

  if (userSelectedPrompt) {
    randomPassword = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = randomPassword;
  }
}

function selectPrompts() {
  charChoices = [];

  passwordLength = parseInt(
    prompt('Please enter the desired length of your password between 8 - 128')
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Please try again, must be between 8 - 128');
    return false;
  }

  if (confirm('Do you want numbers in your password?')) {
    charChoices = charChoices.concat(numberList);
  }

  if (confirm('Do you want symbols in your password?')) {
    charChoices = charChoices.concat(symbolList);
  }

  if (confirm('Do you want upper case letters in your password?')) {
    charChoices = charChoices.concat(upperCaseList);
  }

  if (confirm('Do you want lowercase letters in your password?')) {
    charChoices = charChoices.concat(lowerCaseList);
  }
  return charChoices;
}

function generatePassword() {
  var randomPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    var randomArrayIndex = Math.floor(Math.random() * charChoices.length);
    randomPassword += charChoices[randomArrayIndex];
  }
  return randomPassword;
}
