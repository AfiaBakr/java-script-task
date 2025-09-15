//---------------Chapter 21 to 25---------------//

//-----------------Question 01-----------------//

// var userFirstName = prompt("Enter your First Name; ")
// var userLastName = prompt("Enter your Last Name; ")

// var fullName = userFirstName + " " + userLastName

// console.log("Welcome to " + fullName+".");

//---------------------End---------------------//

//-----------------Question 02-----------------//

// var userInput = prompt("Enter your favorite mobile phone model; ")

// console.log("My favorite mobile phone is; " + userInput);
// console.log(userInput.length);

//---------------------End---------------------//

//-----------------Question 03-----------------//

// var nationality = "Pakistani"

// console.log(nationality.indexOf("n"));


//---------------------End---------------------//

//-----------------Question 04-----------------//

// let text = "Hello World";
// let lastIndex = text.lastIndexOf("l");
// console.log(text);

// console.log("The last index of 'l' is:", lastIndex);

//---------------------End---------------------//

//-----------------Question 05-----------------//

// var nationality = "Pakistani"
// console.log(nationality);
// console.log("Character of index 3 is: "+nationality.charAt(3));

//---------------------End---------------------//

//-----------------Question 06-----------------//

// var userFirstName = prompt("Enter your First Name; ")
// var userLastName = prompt("Enter your Last Name; ")

// var fullName = userFirstName.concat(userLastName)

// console.log("Welcome to " + fullName+".");

//---------------------End---------------------//

//-----------------Question 07-----------------//

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// console.log(city);
// console.log("After replacement:", newCity);

//---------------------End---------------------//

//-----------------Question 08-----------------//

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// console.log(message);
// console.log("After replacement:", newMessage);

//---------------------End---------------------//

//-----------------Question 09-----------------//

// let str = "472";
// console.log("With use of Number method");
// let num = Number(str);

// console.log("Value: " + str + " Type: " + typeof str);
// console.log("Value: " + num + " Type: " + typeof num);

// console.log("With use of parseInt method");
// let num1 = parseInt(str);

// console.log("Value: " + str + " Type: " + typeof str);
// console.log("Value: " + num1 + " Type: " + typeof num1);

//---------------------End---------------------//

//-----------------Question 10-----------------//

// var userInput = prompt("Enter a fruit name")
// console.log(userInput.toUpperCase())


//---------------------End---------------------//

//-----------------Question 11-----------------//

// var userInput = prompt("Enter a fruit name");
// console.log("User input: "+userInput);
// var firstLetter = userInput.slice(0,1).toUpperCase();
// var remainLetters = userInput.slice(1).toLowerCase();
// console.log("Titlecase: "+firstLetter+remainLetters);


//---------------------End---------------------//

//-----------------Question 12-----------------//

// var num = 35.36;
// console.log(num, typeof(num));

// var str = num.toString()
// console.log(str, typeof(str));

// var removeDot = str.replace(".","")

// console.log(removeDot);


//---------------------End---------------------//

//-----------------Question 13-----------------//

// var username = prompt("Enter your username: ");
// var isValid = true;

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i); 

//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (isValid) {
//     console.log("Valid Username: " + username);
// } else {
//     alert("Please enter a valid username without special characters [@ . , !]");
// }

//---------------------End---------------------//

//-----------------Question 14-----------------//

// var bakryItems= ["cake", "apple pie", "cookie", "chips", "patties"]

// var userInput = prompt("Enter a Bakery Item Name").toLowerCase()
// isavailabe = false

// for(var i=0; i<bakryItems.length; i++){
//     if(userInput === bakryItems[i]){
//         isavailabe = true;
//         break
//     }
// }
// if(isavailabe){
//         console.log(userInput+" is available in "+ i+ " index"); 
               
//     }else{console.log("We are sorry "+userInput+ "is not available in our bakery");
//     }

//---------------------End---------------------//

//-----------------Question 15-----------------//

//Gets ASCII code of the first character.
//.charCodeAt(0)
//Numbers in ASCII: 48 (0) to 57 (9)
// Uppercase letters: 65 (A) to 90 (Z)
// Lowercase letters: 97 (a) to 122 (z)

// pass word conditions
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long

// var password = prompt("Enter your password: ");
//console.log(password)
// var hasAlphabet = false;
// var hasNumber = false;
// var isValid = true;

// Check length
// if (password.length < 6) {
//     isValid = false;
// }

// // Check first character (must not be a number)
// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {  // 0-9 ASCII
//     isValid = false;
// }

// // Loop through password to check alphabets & numbers
// for (var i = 0; i < password.length; i++) {
//     var charCode = password.charCodeAt(i);

//     // Check for alphabets (A-Z or a-z)
//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         hasAlphabet = true;
//     }

//     // Check for numbers (0-9)
//     if (charCode >= 48 && charCode <= 57) {
//         hasNumber = true;
//     }
// }

// Final validation
// if (isValid && hasAlphabet && hasNumber) {
//     console.log("Valid Password ✅");
// } else {
//     alert("Invalid Password! \n\nPassword must:\n1. Contain alphabets & numbers\n2. Not start with a number\n3. Be at least 6 characters long.");
// }

//---------------------End---------------------//

//-----------------Question 16-----------------//

// var university = "University of Karachi";
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
    
//---------------------End---------------------//

//-----------------Question 17-----------------//

// var userInput = prompt("Enter any text:");

// var lastChar = userInput.charAt(userInput.length - 1);

// console.log("User input: " + userInput);
// console.log("Last character: " + lastChar);

//---------------------End---------------------//

//-----------------Question 18-----------------//

var sentence = "The quick brown fox jumps over the lazy dog and i am the best";

var lowerSentence = sentence.toLowerCase();

var words = lowerSentence.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

console.log("Text: " + sentence );
console.log("There are " + count + " occurrence(s) of word 'the'")

//---------------------End---------------------//

