var userSentence = prompt ("Enter a Sentence:");


//First function
var outputOne;

function capitalizeLetters() {
 outputOne =userSentence.charAt(0).toUpperCase() + userSentence.charAt(userSentence.length -1).toUpperCase();
}

//Second function
function reverseLetters() {
 return outputOne.split("").reverse().join("")
}

//Third function
 function callBoth(){
  capitalizeLetters();
}
console.log(callBoth());
