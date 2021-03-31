// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // establish password attributes (blank)
  var pwAttributes = {
    charTypes: '',
    pwLength: 8
  }

  // ALERT to prep for answering questions
  alert("Provide the following criteria for your password.");

  // PROMPT 1 asking for password length
  pwAttributes.pwLength = prompt(`Select length of the password, between 8 and 128 characters.`, "8");
  
  // ALERT if user selects less than 8 and set to 8
  if(pwAttributes.pwLength < 8){
    alert(`${pwAttributes.pwLength} is less than 8 charaters, length is set to minimum of 8`)
    pwAttributes.pwLength = 8;
  } 
  
  // ALERT if user selects more than 128 and set to 128
  if (pwAttributes.pwLength > 128){
    alert(`${pwAttributes.pwLength} is more than 128 characters, length is set to maximum of 128`)
    pwAttributes.pwLength = 128;
  }

  // CONFIRM to ask if they want lowercase
  var lowercase = confirm(`Do you want lowercase characters in your password?`);
  

  // CONFIRM to ask if they want uppercase
  var uppercase = confirm(`Do you want uppercase characters in your password?`);
 

  // CONFIRM to ask if they want numeric
  var numeric = confirm(`Do you want numeric characters in your password?`);
 

  // CONFIRM to ask if they want special
  var special = confirm(`Do you want special characters in your password?`);
  

  // Establish character type values
  var lcLetters = `abcdefghijklmnopqrstuvwxyz`;
  var ucLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var numerics = `1234567890`;
  var specChars = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;


  // validate what character types users picked and adds characters to attribute
  if(lowercase){
    pwAttributes.charTypes += lcLetters;
  } if (uppercase){
    pwAttributes.charTypes += ucLetters;
  } if (numeric){
    pwAttributes.charTypes += numerics;
  } if (special){
    pwAttributes.charTypes += specChars;
  }

  // ALERT if user selected zero (no) types and sets to lowercase only
  if(!lowercase && !uppercase && !numeric && !special){
    alert(`You did not select ANY character types, the character type has been set to lowercase only`);
    pwAttributes.charTypes += lcLetters;
  }

  // set password variable to blank
   var password = ``;

  // validator variables
  var passwordValid = true;  
  var spValidator = false;
  var lcValidator = false;
  var ucValidator = false;
  var numValidator = false;

  //  for function to figure out password
   function generatePassword(){

      // do/while statement to generate password and validate charTypes are all used
      do {
  
        // for loop to randomly select password characters based on length and charTypes selected in prompts
        for (var i = 0; i < pwAttributes.pwLength; i++){
          password += pwAttributes.charTypes[Math.floor(Math.random() * pwAttributes.charTypes.length)];
        }
        
        // debug console logging
        console.log(password + ` -- is set after for statement`);
        
        // reset passwordValid
        passwordValid = true;

        // Validator -- each validator initially set to false, turned true upon passing condition

        if(lowercase === true){
          for(i=0; i < lcLetters.length; i++){
            if (password.includes(lcLetters[i])){
              lcValidator = true;
              console.log(`lcValidator is set to ${lcValidator}`);
            }
          }
        } 
        
        if (uppercase === true){
          for(i=0; i < ucLetters.length; i++){
            if (password.includes(ucLetters[i])){
              ucValidator = true;
              console.log(`ucValidator is set to ${ucValidator}`);
            } 
          }
        } 
      
        if (numeric === true){
          for(i=0; i < numerics.length; i++){
            if (password.includes(numerics[i])){
              numValidator = true;
              console.log(`numValidator is set to ${numValidator}`);
            } 
          }
        } 
      
        if (special === true){
          for(i=0; i < specChars.length; i++){
            if (password.includes(specChars[i])){
              spValidator = true;
              console.log(`spValidator is set to ${spValidator}`);
            } 
          }
        }

        // Valdiation that if charType is selected && charType validation did NOT pass, to set passwordValid to false for another gen password loop
        if (lowercase === true && lcValidator === false){
          passwordValid = false; password = '';
        }
        if (uppercase === true && ucValidator === false){
          passwordValid = false; password = '';
        }
        if (numeric === true && numValidator === false){
          passwordValid = false; password = '';
        }
        if (special === true && spValidator == false){
          passwordValid = false; password = '';
        }

        console.log(`end of logic with password set to ${password} and passwordValid set to ${passwordValid}`)
      } while (passwordValid === false);
  }

  // run generatePassword function (inside button click, so will not run without writePassword function)
  generatePassword();

  var passwordText = document.querySelector("#password");

  // give password in box on webpage
    passwordText.value = password;

    // console log attributes and password for visual confirmation 
    console.log(pwAttributes.charTypes);
    console.log(pwAttributes.pwLength);
    console.log(password);


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);