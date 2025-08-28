//----------------Chapter 12 and 13-----------//

//------------------Question 01---------------//



//Gets ASCII code of the first character.
//.charCodeAt(0)
//Numbers in ASCII: 48 (0) to 57 (9)
// Uppercase letters: 65 (A) to 90 (Z)
// Lowercase letters: 97 (a) to 122 (z)

// var char = prompt("Enter a single character:");
// var asciiCode = char.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log("The input is a number.");
// }
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log("The input is an uppercase letter.");
// }
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log("The input is a lowercase letter.");
// }
// else {
//     console.log("The input is neither a number nor a letter.");
// }

//---------------------End--------------------//

//------------------Question 02---------------//

// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//     console.log("First number "+num1 + " is larger.");
// }
// else if (num2 > num1) {
//     console.log("Second number "+num2 + " is larger.");
// }
// else {
//     console.log("Both numbers are equal.");
// }

//---------------------End--------------------//

//------------------Question 03---------------//

// var num = +prompt("Enter a number:");

// if (num > 0) {
//     console.log("The number is positive.");
// }
// else if (num < 0) {
//     console.log("The number is negative.");
// }
// else {
//     console.log("The number is zero.");
// }

//---------------------End--------------------//

//------------------Question 04---------------//

// var character = prompt("Enter a single character:").toLowerCase();

// if (character.length === 1) {
//     if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//         console.log(true); // It is a vowel
//     } else {
//         console.log(false); // Not a vowel
//     }
// } else {
//     console.log("Please enter exactly one character.");
// }

//---------------------End--------------------//

//------------------Question 05---------------//

// var correctPassword = "AfiaBakr@2025!"

// var userPassword = prompt("Enter password")

//Check if user has entered password.

// if(userPassword !== ""){
//     if(correctPassword === userPassword){
//     console.log("Correct! The password you entered matches the original password.")
//     }else{
//         console.log("Incorrect password")
//     }
// }else{
//     console.log("Please enter your password”")
// }

//---------------------End--------------------//

//------------------Question 06---------------//

// var greeting;
// var hour = 13;
// if (hour < 18) {
// console.log(greeting = "Good day");
// }else{
// console.log(greeting = "Good evening");
// }

//---------------------End--------------------//

//------------------Question 07---------------//

// var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// if (time >= 0 && time < 1200) {
//     console.log("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     console.log("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     console.log("Good Night!");
// }
// else {
//     console.log("Invalid time format! Please enter between 0000 and 2359.");
// }

//---------------------End--------------------//

