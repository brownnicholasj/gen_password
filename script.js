// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwAttributes = {
    charTypes: '',  
    pwLength: 0
  }

  alert("Provide the following criteria for your password.");

  pwAttributes.pwLength = prompt(`Select length of the password, between 8 and 128 characters.`, "8");
  if(pwAttributes.pwLength < 8){
    alert(`${pwAttributes.pwLength} is less than 8 charaters, length is set to minimum of 8`)
    pwAttributes.pwLength = 8;
  } if (pwAttributes.pwLength > 128){
    alert(`${pwAttributes.pwLength} is more than 128 characters, length is set to maximum of 128`)
    pwAttributes.pwLength = 128;
  }
  
  var lowercase = confirm(`Do you want lowercase characters in your password?`);
  console.log(lowercase);

  var uppercase = confirm(`Do you want uppercase characters in your password?`);
  console.log(uppercase);

  var numeric = confirm(`Do you want numeric characters in your password?`);
  console.log(numeric);

  var special = confirm(`Do you want special characters in your password?`);
  console.log(special);

  var lcLetters = `abcdefghijklmnopqrstuvwxyz`;
  var ucLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var numerics = `1234567890`;
  var specChars = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

  if(lowercase){
    pwAttributes.charTypes += lcLetters;
  } if (uppercase){
    pwAttributes.charTypes += ucLetters;
  } if (numeric){
    pwAttributes.charTypes += numerics;
  } if (special){
    pwAttributes.charTypes += specChars;
  }

  if(!lowercase && !uppercase && !numeric && !special){
    alert(`You did not select ANY character types, the character type has been set to lowercase only`);
    pwAttributes.charTypes += lcLetters;
  }

   var password = ``;

   function generatePassword(){
    for (var i = 0; i < pwAttributes.pwLength; i++){
      password += pwAttributes.charTypes[Math.floor(Math.random() * pwAttributes.charTypes.length)];
    }
  }
  generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(pwAttributes.charTypes);
  console.log(pwAttributes.pwLength);
  console.log(password);
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
