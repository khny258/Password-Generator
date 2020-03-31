//variables
var passwordLength = 0;
var charSelected = [];
var randomChar = 0;
var finalPassword = "";

//array of lowercase letters
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array of uppercase letters
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//array of numbers
const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//array of special characters
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "="];

//onclick of 'Generate Password' button to open popup window
function startPrompt() {
    getPrompt();
    getConfirms();
};

//popup prompt
function getPrompt() {
    passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");

    numberLength = parseInt(passwordLength);
    passwordLength = numberLength;

    while (passwordLength <= 7 || passwordLength >= 129) {
        alert("Try again. Must be a number between 8 and 128.");
        passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");

        numberLength = parseInt(passwordLength);
        passwordLength = numberLength;
    };

};

//popup confirms
function getConfirms() {
    const hasLower = confirm("Would you like to include lowercase letters?");

    const hasUpper = confirm("Would you like to include uppercase letters?");

    const hasNumber = confirm("Would you like to include numeric characters?");

    const hasSpecial = confirm("Would you like to include special characters?");

    //generate arrays of selected characters
    if (hasLower) {
        lowerArr = charSelected.concat(lowercase);
        charSelected = lowerArr;
    };

    if (hasUpper) {
        upperArr = charSelected.concat(uppercase);
        charSelected = upperArr;
    };

    if (hasNumber) {
        numberArr = charSelected.concat(number);
        charSelected = numberArr;
    };

    if (hasSpecial) {
        specialArr = charSelected.concat(special);
        charSelected = specialArr;
    };

    //alert for if all of the above choices are false
    if ((hasLower === false) && (hasUpper === false) && (hasNumber === false) && (hasSpecial === false)) {
        alert("You must select at least one character type.");
        getPrompt();
    };

    //create the final password
    for (var i = 0; i < passwordLength; i++) {
        randomChar = Math.floor(Math.random() * charSelected.length);
        finalPassword += charSelected[randomChar];
    };

    document.getElementById("password").value = finalPassword;
};

//function to copy password to clipboard
function copyClipboard() {
    copyPassword();
};

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password Copied to Clipboard")
};