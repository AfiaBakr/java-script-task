//---------------------Chapter 26 to 30---------------------//

//-----------------------Question 01-----------------------//

// var num =3.45214
// var userNum = +prompt("Enter a Positive number in decimal with 5 place");

// document.write("number: " + userNum+"<br>");
// if (userNum >= 0) {
//   document.write("round off value: " + Math.round(userNum)+"<br>");
//   document.write("floor value: " + Math.floor(userNum)+"<br>");
//   document.write("c value: " + Math.ceil(userNum)+"<br>");
// } else {
//   document.write("Please write Positive number only");
// }


//---------------------------End---------------------------//

//-----------------------Question 02-----------------------//

// var userNum = +prompt("Enter a Negative number in decimal with 5 place");

// document.write("number: " + userNum+"<br>");
// if (userNum <= 0) {
//   document.write("round off value: " + Math.round(userNum)+"<br>");
//   document.write("floor value: " + Math.floor(userNum)+"<br>");
//   document.write("ceil value: " + Math.ceil(userNum)+"<br>");
// } else {
//   document.write("Please write Negative number only");
// }


//---------------------------End---------------------------//

//-----------------------Question 03-----------------------//

// var num = -5
// var num1 =-4
// console.log(Math.abs(num));
// console.log(Math.abs(num1));

// console.log(num*-1);
// console.log(num1*-1);

//---------------------------End---------------------------//

//-----------------------Question 04-----------------------//

// var randomNum = Math.random()*6
// var num = Math.round(randomNum)
// console.log("Random dice value is: "+num);

//---------------------------End---------------------------//

//-----------------------Question 05-----------------------//

// var randomNum = Math.random()*2
// var roundNum = Math.round(randomNum)
// console.log(roundNum);

// if(roundNum===2){
//     console.log("Random coin value: Heads"); 
// }else{
//    console.log("Random coin value: Tails");  
// }

//---------------------------End---------------------------//

//-----------------------Question 06-----------------------//

// var randomNum = Math.random()*99
// var roundNum = Math.round(randomNum)
// console.log("Random number between 1 and 100: "+roundNum);

//---------------------------End---------------------------//

//-----------------------Question 07-----------------------//

// var userInput = parseFloat(prompt("Enter you wieght in kilograms: "))
// console.log("The wieght of user is : "+userInput+" Kilograms");

//---------------------------End---------------------------//

//-----------------------Question 08-----------------------//

var userNum = +prompt("Enter a number between 1 to 10")
console.log("Your number is: "+userNum);

var guessNum = Math.ceil(Math.random()*10)
if(userNum===guessNum){
    console.log("You Win");
    console.log("Computer number is: "+guessNum);
}else{console.log("Sorry Try again. Computer number is: "+guessNum)}

//---------------------------End---------------------------//