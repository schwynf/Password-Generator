// setting up 4 arrays using the input criteria from user to make password
var lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = [" ", "!", "\”", "#", "$", "%", "&", "\’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(lowerCharArray[0].toUpperCase());
console.log(specialCharArray[2]);

var userAnswerLength = prompt("how many characters do you want for password? minimun:8 & maximum:128");
// prompt is a string so I have to parseInt to get data type "number"
var userAnswerParse = parseInt(userAnswerLength);
var userAnswerParseType = typeof userAnswerParse;

// Checking if input is valid
if (userAnswerParseType === "number" && userAnswerParse > 7 && userAnswerParse < 129) {
    var userAnsewerLowerCase = confirm("Include Lower Case Letters?");
    var userAnswerUpperCase = confirm("Include Upper Case Letters?");
    var userAnsewerNumber = confirm("Include Numbers?");
    var userAnswerSpecialChar = confirm("Include special characters?");

    var randomNumber;
    var randomLowerCharArray = [];
    var randomNumericArray = [];
    var randomSpecialCharArray = [];
    var newArray = [];
    // piggybackArray used to randomize order of newArray
    var piggyBackArray = [];
    var x;
    // setting up the newArray length to be equal to userAnswerParse. The while loop will stop when newArray.length is equal to userAnswerParse.
    while (newArray.length < userAnswerParse) {
        if (userAnsewerLowerCase === true && newArray.length < userAnswerParse) {
            randomNumber = Math.floor(Math.random() * lowerCharArray.length);
            x = lowerCharArray[randomNumber]
            newArray.push(x);
            randomNumber = Math.floor(Math.random() * 1000);
            piggyBackArray.push(randomNumber);
        }
        if (userAnswerUpperCase === true && newArray.length < userAnswerParse) {
            randomNumber = Math.floor(Math.random() * lowerCharArray.length);
            x = lowerCharArray[randomNumber].toUpperCase();
            newArray.push(x);
            randomNumber = Math.floor(Math.random() * 1000);
            piggyBackArray.push(randomNumber);
        }
        if (userAnsewerNumber === true && newArray.length < userAnswerParse) {
            randomNumber = Math.floor(Math.random() * numericArray.length);
            x = numericArray[randomNumber];
            newArray.push(x);
            randomNumber = Math.floor(Math.random() * 1000);
            piggyBackArray.push(randomNumber);
        }
        if (userAnswerSpecialChar === true && newArray.length < userAnswerParse) {
            randomNumber = Math.floor(Math.random() * specialCharArray.length);
            x = specialCharArray[randomNumber];
            newArray.push(x);
            randomNumber = Math.floor(Math.random() * 1000);
            piggyBackArray.push(randomNumber);
        }
    }
    // piggyBackArray prior to bubble sort--check console
    var rand = [];
    for(i = 0; i < piggyBackArray.length; i++){
        rand[i] = piggyBackArray[i];
    }
    console.log(rand);
    // newArray prior to bubble sort--check console
    var o = [];
    for(i = 0; i < newArray.length; i++){
        o[i] = newArray[i];
    }
    console.log(o);

    // Using bubble sort algo to randomize newArray
    var x = piggyBackArray;
    var n = piggyBackArray.length-1;
    var swap = true;
    while (swap) {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i] > x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                var temp1 = newArray[i];
                newArray[i] = newArray[i + 1];
                newArray[i + 1] = temp1;
                swap = true;
            }
        }
        n--;
    }
    console.log(x);
    // uncomment 1-3 comments below to run check cases. Make sure to press cancel when prompted depending on which case you choose!
    // newArray[0] = "!";
    // newArray[1] = "1";
    // newArray[2] = "U"
    // newArray[3] = "t"
    var text = "";
    for (i = 0; i < newArray.length; i++) {
        text += newArray[i];
    }
    console.log(text);
    var check = "Password has been validated per user requirements. Enjoy!";
    var checkMatch = "";
    var a;

    // check for lower case letter
    if (userAnsewerLowerCase === false) {
        a = 0;
        while (a < lowerCharArray.length) {
            for (i = 0; i < text.length; i++)
                if (lowerCharArray[a] === text.charAt(i)) {
                    check = "Password Failed";
                    checkMatch += text.charAt(i);
                }
            a++;
        }
    }

    // check for upper case letter
    if (userAnswerUpperCase === false) {
        a = 0;
        while (a < lowerCharArray.length) {
            for (i = 0; i < text.length; i++)
                if (lowerCharArray[a].toUpperCase() === text.charAt(i)) {
                    check = "Password Failed";
                    checkMatch += text.charAt(i);
                }
            a++;
        }
    }

    // check for number
    if (userAnsewerNumber === false) {
        a = 0;
        while (a < numericArray.length) {
            for (i = 0; i < text.length; i++)
                if (numericArray[a] === text.charAt(i)) {
                    check = "Password Failed";
                    checkMatch += text.charAt(i);
                }
            a++;
        }
    }

    // check for special character
    if (userAnswerSpecialChar === false) {
        a = 0;
        while (a < specialCharArray.length) {
            for (i = 0; i < text.length; i++)
                if (specialCharArray[a] === text.charAt(i)) {
                    check = "Password Failed";
                    checkMatch += text.charAt(i);
                }
            a++;
        }
    }
    console.log(check);
    console.log(checkMatch);
}
