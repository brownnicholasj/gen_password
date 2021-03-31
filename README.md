# Password Generator
## Description
This is a random password generation program that takes feedback from the user and provides a randomly generated password upon completion:
- Allows users to quickly develop a passwords with their input
- Breaking down user input to 5 prompt/confirm questions:
1) Password Length
2) use of lowercase characters
3) use of UPPERCASE characters
4) use of numeric characters
5) use of special characters given by https://owasp.org/www-community/password-special-characters [no space character]
- I found that the creating of a random password, given the input was easy, for me.  I did have some logic troubleshooting with a 'validator' that I built, to ensure that each character type was used, if the user selected it.  
## Table of Contents (Optional)
- [Usage](#usage)
- [Features](#features)
- [Tests](#tests)

## Usage
As a user, I will go to the webesite and click the 'Generate Password' button that has a red background.<br>
![alt text](./assets/images/useage01.jpg)<br><br>

A series of Prompts and/or Confirm boxes will appear to get user input on the parameters of the password to be generated.<br>
![alt text](./assets/images/useage02.jpg)<br><br>

After responding to the prompts/confirm boxes, the password will generate inside the dotted box, adhering to the users parameters.<br>
![alt text](./assets/images/useage03.jpg)<br><br>

From here, the user can copy the password to use or click the generate password button to redo the fucnction.


## Features
The first Alert box notifies users to provide criteria for their password<br>
![alt text](./assets/images/features01.jpg)<br><br>

The next box asks the user to select their password length by inputing a number between 8 and 128 (with default value of 8).
- If the user selects a number less than 8 an alert pops up 
![alt text](./assets/images/features02.jpg)
- If the user selects a number greater than 128 an alert pops up
![alt text](./assets/images/features03.jpg)
<br><br>

The next series (4) confirm boxes ask the user if they would like to have a set of character types in their password (lowercase, uppercase, numeric, special characters).
- If the user selects/answers false on all four boxes an alert pops up
![alt text](./assets/images/features04.jpg)

Validator
- logic created to ensure that each Character Type selected, is actually used.

- Logic Flow 
    - is a character type used?
        - if true, next statement
            - is any character in the character type used in the password?
                - if false, password invalid, re-generate password with same attributes provided in the prompts
    - repeat for all 4 character types
    ![alt text](./assets/images/features05.jpg)


## Tests
1) Sunny day
    1) Click 'Generate Password' Button
    2) Click 'OK' on the first Alert
    3) Input value of 10
    4) Click 'OK' on lowercase question confirm
    5) Click 'OK' on uppercase question confirm
    6) Click 'OK' on numeric question confirm
    7) Click 'OK' on speical question confirm
    8) Confirm password given is 10 characters long and each character type is used at least once
<br>
2) Less than 8 Characters
    1) Click 'Generate Password' Button
    2) Click 'OK' on the first Alert
    3) Input value of 6
    4) Click 'OK' on the Alert telling you 6 is less than 8 and length is set to 8 
    5) Click 'OK' on lowercase question confirm
    6) Click 'OK' on uppercase question confirm
    7) Click 'OK' on numeric question confirm
    8) Click 'OK' on speical question confirm
    9) Confirm password given is 8 characters long and each character type is used at least once
<br>
3) More than 128 Characters
    1) Click 'Generate Password' Button
    2) Click 'OK' on the first Alert
    3) Input value of 145
    4) Click 'OK' on the Alert telling you 145 is more than 128 and length is set to 128 
    5) Click 'OK' on lowercase question confirm
    6) Click 'OK' on uppercase question confirm
    7) Click 'OK' on numeric question confirm
    8) Click 'OK' on speical question confirm
    9) Confirm password given is 128 characters long and each character type is used at least once
<br>
4) Lowercase only
    1) Click 'Generate Password' Button
    2) Click 'OK' on the first Alert
    3) Input value of 8
    4) Click 'OK' on lowercase question confirm
    5) Click 'Cancel' on uppercase question confirm
    6) Click 'Cancel' on numeric question confirm
    7) Click 'Cancel' on speical question confirm
    8) Confirm password given is 8 characters long and lowercase character type is only used
<br>
5) No Character Types
    1) Click 'Generate Password' Button
    2) Click 'OK' on the first Alert
    3) Input value of 8
    4) Click 'Cancel' on lowercase question confirm
    5) Click 'Cancel' on uppercase question confirm
    6) Click 'Cancel' on numeric question confirm
    7) Click 'Cancel' on speical question confirm
    8) Click 'OK' on alert telling you that no types were select and type has been set to lowercase only
    9) Confirm password given is 8 characters long and lowercase character type is only used