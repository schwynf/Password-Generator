var lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCharArray[0].toUpperCase());
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = [" ", "!", "\”", "#", "$", "%", "&", "\’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(specialCharArray[2]);

var userAnswerLength = prompt("how many characters do you want for password? minimun:8 & maximum:128");
var userAnswerParse = parseInt(userAnswerLength);
var userAnswerParseType = typeof userAnswerParse;
if (userAnswerParseType === "number" && userAnswerParse > 7 && userAnswerParse < 129) {
    var userAnsewerLowerCase = confirm("Include Lower Case Letters?");
    var userAnswerUpperCase = confirm("Include Upper Case Letters?");
    var userAnsewerNumber = confirm("Include Numbers?");
    var userAnswerSpecialChar = confirm("Include special characters?");
    if (userAnsewerLowerCase === true && userAnswerUpperCase === true && userAnsewerNumber === true && userAnswerSpecialChar === true) {
        var randomNumber;
        var randomLowerCharArray = [];
        var randomNumericArray = [];
        var randomSpecialCharArray = [];
        for (i = 0; i < userAnswerParse; i++) {
            randomNumber = Math.floor(Math.random() * lowerCharArray.length);
            randomLowerCharArray[i] = randomNumber;
            randomNumber = Math.floor(Math.random() * numericArray.length);
            randomNumericArray[i] = randomNumber;
            randomNumber = Math.floor(Math.random() * specialCharArray.length);
            randomSpecialCharArray[i] = randomNumber;
        }
        var checkModule = Math.floor(userAnswerParse / 4);
        var text = "";
        for (x = 0; x < checkModule; x++) {
            text = text + lowerCharArray[randomLowerCharArray[x]] + specialCharArray[randomSpecialCharArray[x]] + numericArray[randomNumericArray[x]] + lowerCharArray[randomLowerCharArray[x]].toUpperCase();
        }
        var mod = userAnswerParse % 4;
        if (mod > 2) {
            text += lowerCharArray[randomLowerCharArray[x]] + specialCharArray[randomSpecialCharArray[x]] + numericArray[randomNumericArray[x]];
        } else if (mod > 1) {
            text += lowerCharArray[randomLowerCharArray[x]] + specialCharArray[randomSpecialCharArray[x]];
        } else if (mod > 0) {
            text += lowerCharArray[randomLowerCharArray[x]];
        } else {
            document.getElementById("demo").innerHTML = text;
        }

        document.getElementById("demo").innerHTML = text;
        document.getElementById("d").innerHTML = text.length;
    }else if (userAnsewerLowerCase === true && userAnswerUpperCase === true && userAnsewerNumber === true) {
        var randomNumber;
        var randomLowerCharArray = [];
        var randomNumericArray = [];
        var randomSpecialCharArray = [];
        for (i = 0; i < userAnswerParse; i++) {
            randomNumber = Math.floor(Math.random() * lowerCharArray.length);
            randomLowerCharArray[i] = randomNumber;
            randomNumber = Math.floor(Math.random() * numericArray.length);
            randomNumericArray[i] = randomNumber;
            randomNumber = Math.floor(Math.random() * specialCharArray.length);
            randomSpecialCharArray[i] = randomNumber;
        }
        var checkModule = Math.floor(userAnswerParse / 3);
        var text = "";
        for (x = 0; x < checkModule; x++) {
            text = text + lowerCharArray[randomLowerCharArray[x]] + numericArray[randomNumericArray[x]] + lowerCharArray[randomLowerCharArray[x]].toUpperCase();
        }
        var mod = userAnswerParse % 3;
        if (mod > 1) {
            text += lowerCharArray[randomLowerCharArray[x]] + numericArray[randomNumericArray[x]];
        } else if (mod > 0) {
            text += lowerCharArray[randomLowerCharArray[x]];
        } else {
            document.getElementById("demo").innerHTML = text;
        }
        document.getElementById("demo").innerHTML = text;
        document.getElementById("d").innerHTML = text.length;
    }else{
        document.getElementById("demo").innerHTML = "hi";
    }
} 