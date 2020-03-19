# Password-Generator
if(userAnsewerLowerCase === true && userAnswerUpperCase === true && userAnsewerNumber === true && userAnswerSpecialChar === true){
var randomNumber;
var randomLowerCharArray = [];
for(i=0;i<lowerCharArray;i++){
    randomNumber = Math.floor(Math.random() * lowerCharArray.length);
    randomLowerCharArray[i] = randomNumber;
}
var randomNumericArray = [];
for(i=0;i<numericArray;i++){
    randomNumber = Math.floor(Math.random() * numericArray.length);
    randomNumericArray[i] = randomNumber;
}
var randomSpecialCharArray = [];
for(i=0;i<specialCharArray;i++){
    randomNumber = Math.floor(Math.random() * specialCharArray.length);
    randomSpecialCharArray[i] = randomNumber;
}
var text = [];
for(i=0;i<userAnswerCharLength.length;i++){
    text[i]= lowerCharArray[randomNumberArray[i]] + lowerCharArray[randomNumberArray[i]].toUpperCase() + specialCharArray[randomSpecialCharArray[i]] + numericArray[randomNumericArray[i]];
}
text.pop();
var showPassword
for(i=0;i<text.length;i++){
    showPassword += text[i];
}
document.getElementById("demo").textContent = showPassword;

    }
} else{
    alert("sorry please follow criteria");
}















// var randomNumber;
// userAnswerCharLength = Math.floor(Math.random() * userAnswerLength);
// var randomNumberArray = [];
// for(i=0;i<lowerCharArray;i++){
//     randomNumber = Math.floor(Math.random() * lowerCharArray.length);
//     randomLowerCharArray[i] = randomNumber;
// }
// for(i=0;i<numericArray;i++){
//     randomNumber = Math.floor(Math.random() * numericArray.length);
//     randomNumericArray[i] = randomNumber;
// }
// for(i=0;i<specialCharArray;i++){
//     randomNumber = Math.floor(Math.random() * specialCharArray.length);
//     randomSpecialCharArray[i] = randomNumber;
// }
// var text = [];
// for(i=0;i<userAnswerCharLength.length;i++){
//     text[i]= lowerCharArray[randomNumberArray[i]] + specialCharArray[randomSpecialCharArray[i]] + numericArray[randomNumericArray[i]];
// }
// text.pop();
// var showPassword
// for(i=0;i<text.length;i++){
//     showPassword += text[i];
// }
// document.getElementById("demo").textContent = showPassword;