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
  
    var passwordLength = document.getElementById("password-length").value;
  
    if (passwordLength < 10 || passwordLength > 128) {
        alert("Value must be between 10 - 128")
        return;
    }


    function promptTypes() {
        if (confirm("Do you want to add uppercase letters?")) {
            tempValues = tempValues + upperCase;
        } else {
            tempValues = tempValues - upperCase;
            console.log(tempValues);            
        }
        if (confirm("Do you want to add lowercase letters?")) {
            tempValues = tempValues + lowerCase;
            console.log(tempValues);
        } else {
            tempValues = tempValues - lowerCase;
        }
        if (confirm("Do you want to add numbers?")) {
            tempValues = tempValues + numbers;
            console.log(tempValues);
        } else {
            tempValues = tempValues - numbers;
        }
        if (confirm("Do you want to add special characters?")) {
            tempValues = tempValues + specialChar;
            console.log(tempValues);
        } else {
            tempValues = tempValues - specialChar;
        } 
    };

    promptTypes();

    var password = "";
    
    for (i = 0; i <= passwordLength; i++){
        password = password + tempValues.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
        console.log(password);
    }
    
    securePassword.textContent = password;

});




function copyPassword() {
    document.getElementById("securePassword").select();
    document.execCommand("Copy");
    alert("Password copied");
}