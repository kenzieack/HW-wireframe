var passwordBtn = document.getElementById("newPasswordBtn");
var copyPasswordBtn = document.getElementById("copyPasswordBtn");
var securePassword = document.getElementById("securePassword");
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+={}|[]\;':.,/?><`~";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_+={}|[]\;':.,/?><`~";
var password = "";
var tempValues = "";



passwordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // Get password length
    var passwordLength = document.getElementById("password-length").value;
    // Check passsword length is between 8 - 128 
    if (passwordLength < 10 || passwordLength > 128) {
        alert("Value must be between 10 - 128")
        return;
    }

    // Prompt user for password types
    function promptTypes() {
        if (confirm("Add uppercase letters?")) {
            tempValues = tempValues + upperCase;
            console.log(tempValues);            
        }
        if (confirm("Add lowercase letters?")) {
            tempValues = tempValues + lowerCase;
            console.log(tempValues);
        }
        if (confirm("Add numbers?")) {
            tempValues = tempValues + numbers;
            console.log(tempValues);
        }
        if (confirm("Add special characters?")) {
            tempValues = tempValues + specialChar;
            console.log(tempValues);
        }
    }
    promptTypes();

    var password = "";
    // Loop through the tempValues variable and set random characters for the length of the password
    for (i = 0; i <= passwordLength; i++){
        password = password + tempValues.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
        console.log(password);
    }
    // Display new randomly generated password 
    securePassword.textContent = password;

});



// Copy password to clipboard
function copyPassword() {
    document.getElementById("securePassword").select();
    document.execCommand("Copy");
    alert("Password copied");
}