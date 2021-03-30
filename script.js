// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // establish password attributes (blank)
  var pwAttributes = {
    charTypes: '',
    pwLength: 0
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
  console.log(lowercase);

  // CONFIRM to ask if they want uppercase
  var uppercase = confirm(`Do you want uppercase characters in your password?`);
  console.log(uppercase);

  // CONFIRM to ask if they want numeric
  var numeric = confirm(`Do you want numeric characters in your password?`);
  console.log(numeric);

  // CONFIRM to ask if they want special
  var special = confirm(`Do you want special characters in your password?`);
  console.log(special);

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

  //  for function to figure out password
   function generatePassword(){
    for (var i = 0; i < pwAttributes.pwLength; i++){
      password += pwAttributes.charTypes[Math.floor(Math.random() * pwAttributes.charTypes.length)];
    }
  }

  // run generatePassword function (inside button click, so will not run without writePassword function)
  generatePassword();

  var passwordText = document.querySelector("#password");

  // give password in box on webpage
  passwordText.value = password;

  console.log(pwAttributes.charTypes);
  console.log(pwAttributes.pwLength);
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function test(){
  console.log(`Test function start`);
    // set password variable to blank
    var password = ``;

      //  for function to figure out password
   function generatePassword(){
    var pwAttributes = {
      charTypes: 'abcdefghijklmnopqrstuvwxyzABC1234!@#',
      pwLength: 16
    }
    for (var i = 0; i < pwAttributes.pwLength; i++){
      password += pwAttributes.charTypes[Math.floor(Math.random() * pwAttributes.charTypes.length)];
    }
    
  }
  generatePassword();
  console.log(`current password var is ${password}`);

  var lowercase = true;
  var uppercase = true;
  var numeric = true;
  var special = true;

  var lcLetters = `abcdefghijklmnopqrstuvwxyz`;
  var ucLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var numerics = `1234567890`;
  var specChars = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

  var spValidator = false;
  var lcValidator = false;
  var ucValidator = false;
  var numValidator = false;

  function validator (){
    // var valid = false;
    // for(i=0; i < lcLetters.length; i++){
    //   if (password.includes(lcLetters[i])){
    //     valid = true;
    //   }
    // }
    // console.log(`validator found ${valid}`);
    if(lowercase === true){
      
      for(i=0; i < lcLetters.length; i++){
        if (password.includes(lcLetters[i])){
          lcValidator = true;
        }
      }
      console.log(`lcValidator says ${lcValidator}`);
    }

    if(uppercase === true){
      
      for(i=0; i < ucLetters.length; i++){
        if (password.includes(ucLetters[i])){
          ucValidator = true;
        }
      }
      console.log(`ucValidator says ${ucValidator}`);
    }

    if(numeric === true){
      
      for(i=0; i < numerics.length; i++){
        if (password.includes(numerics[i])){
          numValidator = true;
        }
      }
      console.log(`numValidator says ${numValidator}`);
    }

    if(special === true){
      
      for(i=0; i < specChars.length; i++){
        if (password.includes(specChars[i])){
          spValidator = true;
        }
      }
      console.log(`spValidator says ${spValidator}`);
    }
    if (lcValidator && ucValidator && numValidator && spValidator){
      console.log(`lcV: ${lcValidator}, ucV: ${ucValidator}, numV: ${numValidator}, spV: ${spValidator}`);
      console.log(`Password of ${password} is valid`);
      passwordValid = true;
      
    } else {
      console.log(`NOT VALID`);
      
  }
  }

    
    var passwordValid = false;
    console.log(`starting loop`);
    do{
      generatePassword();
      validator();
    }
    while (passwordValid == false);
      

}
test();