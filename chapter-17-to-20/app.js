//--------------Chapter 17 to 20-----------//

//----------------Question 01--------------//

// var multiArray = [[], [], []]; // 3 empty arrays inside

// console.log(multiArray);

//--------------------End------------------//

//----------------Question 02--------------//

// var matrix = [ [0, 1, 2, 3],  [1, 0, 1, 2],  [2, 1, 0, 1] ];
// for (var i = 0; i < matrix.length; i++) {
//   console.log(matrix[i].join(" "));
// }

//--------------------End------------------//

//----------------Question 03--------------//

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

//--------------------End------------------//

//----------------Question 04--------------//

// var tableNumber = prompt("Enter a number for multiplication table: ");
// var tableLength = prompt("Enter length of the table: ");

// document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");

// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

//--------------------End------------------//

//----------------Question 05--------------//

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits);

// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at index " , i , " is " ,fruits[i] );
// }

//--------------------End------------------//

//----------------Question 06--------------//

// console.log("Counting:");
//     for (var i = 1; i <= 15; i++) {
//       console.log(i + (i < 15 ? ", " : ""));
//     }

//     b. Reverse counting
//     console.log("Reverse Counting:");
//     for (var i = 10; i >= 1; i--) {
//       console.log(i + (i > 1 ? ", " : ""));
//     }

//    c. Even
//     console.log("Even:");
//     for (var i = 0; i <= 20; i += 2) {
//       console.log(i + (i < 20 ? ", " : ""));
//     }

//     d. Odd
//     console.log("Odd:");
//     for (var i = 1; i < 20; i += 2) {
//       console.log(i + (i < 19 ? ", " : ""));
//     }

//     e. Series
//     console.log("Series:");
//     for (var i = 2; i <= 20; i += 2) {
//       console.log(i + "k" + (i < 20 ? ", " : ""));
//     }

//--------------------End------------------//

//----------------Question 07--------------//

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order? ");
// flag = false
// for(var i = 0; i<bakeryItems.length; i++){
//     if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()) {
//         console.log(userInput," is availble at index ",i,"in our bakery");
//         flag = true;
//         break;  
// }
// }
// // !flag or flag ===false
// if(!flag){
//     console.log("We are sorry. ",userInput," is not available in our bakery");
// }

//--------------------End------------------//

//----------------Question 08--------------//

// var num = [24, 53, 78, 91, 12]
// var maxNum = num[0];

// for(var i = 0; i<num.length; i++){
//     if (num[i]>maxNum){
//         maxNum = num[i]
//     }
// }
// console.log(maxNum);

//--------------------End------------------//

//----------------Question 09--------------//


// var num = [24, 53, 78, 91, 12]
// var minNum = num[0];

// for(var i = 0; i<num.length; i++){
//     if (num[i]<minNum){
//         minNum = num[i]
//     }
// }
// console.log(minNum);

//--------------------End------------------//

//----------------Question 10--------------//

// console.log("Multiples of 5 (1 to 100):");
//     for (var i = 5; i <= 100; i += 5) {
//       console.log(i + (i < 100 ? ", " : ""));
//     }

//--------------------End------------------//
