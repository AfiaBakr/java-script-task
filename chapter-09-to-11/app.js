//------------Chapter 09 to 11--------------//

//--------------Question 01-----------------//

// var city = prompt("Enter your city name ");

// if(city== "Karachi"){
//     console.log("Welcome to city of lights");
// }

//-----------------End---------------------//

//--------------Question 02-----------------//

// var gender = prompt("Enter your gender ");

// if(gender == "male"){
//     console.log("Good morning Sir");
// }
// else if(gender == "female"){
//     console.log("Good morning Ma'am");
// }else {
//     console.log("Invalid gender");
// }

//-----------------End---------------------//

//--------------Question 03-----------------//

// var signalColor = prompt("Enter signal color ");

// if(signalColor == "Red"){
//     console.log("Must Stop");
// }
// else if(signalColor == "Yellow"){
//     console.log("Ready to move");
// }
// else if(signalColor == "Green"){
//     console.log("Move now");
// }else {
//     console.log("Invalid color");
// }

//-----------------End---------------------//

//--------------Question 04-----------------//

// var remainingFuel = +prompt("Remaining fuel in car (in only 0 to 1 litres) ");

// if(remainingFuel <= 0.25){
//     console.log("Please refill the fuel in your car");
// }else {
//     console.log("Enjoy your journey");
// }

//-----------------End---------------------//

//--------------Question 05-----------------//

//--------------Question 05 a)-----------------//
// var a = 4; 
// if (++a === 5){
// alert("given condition for variable a is true"); // printable condition
// }

//--------------Question 05 b)-----------------//
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); // not printable condition
// }

//--------------Question 05 c)-----------------//
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true"); // not printable condition
// }
// if (c === 13){
// alert("condition 2 is true"); // printable condition
// }
// if (++c < 14){
// alert("condition 3 is true"); // not printable condition
// }
// if(c === 14){
// alert("condition 4 is true"); // printable condition
// }

//--------------Question 05 d)-----------------//
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === (laborCost + materialCost)){
// alert("The cost equals"); // printable condition
// }

//--------------Question 05 e)-----------------//
// if (true){
// alert("True"); // printable condition
// }
// if (false){
// alert("False"); // not printable condition
// }

//--------------Question 05 f)-----------------//
// if("car" < "cat"){
// alert("car is smaller than cat"); // printable condition
// }

//-----------------End---------------------//

//--------------Question 06-----------------//

// var maxMark = 100
// var totalmaxMarks =maxMark*3

// var englishMarks = +prompt("Enter your obtain number of subject English ")
// var urduMarks = +prompt("Enter your obtain number of subject Urdu ")
// var mathsMarks = +prompt("Enter your obtain number of subject Maths ")

// var totalObtainMarks = englishMarks + urduMarks + mathsMarks

// var percentage = totalObtainMarks / totalmaxMarks *100

// document.write("<h2>Marks Sheet</h2><br/>")

// if(percentage >= 80 && percentage <= 100 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: A-one</h4>")
//     document.write("<h4>Remarks: Excellent</h4>")
// }
// else if(percentage >= 70 && percentage <= 79 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: A</h4>")
//     document.write("<h4>Remarks: Good</h4>")
// }
// else if(percentage >= 60 && percentage <= 69 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: B</h4>")
//     document.write("<h4>Remarks: You need to improve</h4>")
// }
// else if(percentage >= 0 && percentage <= 59 ){
//     document.write("<h4>Total marks: "+totalmaxMarks+"</h4>")
//     document.write("<h4>Total obtain marks: "+totalObtainMarks+"</h4>")
//     document.write("<h4>Percentage: "+percentage+" %</h4>")
//     document.write("<h4>Grade: Fail</h4>")
//     document.write("<h4>Remarks: Sorry</h4>")
// }
// else{
//     document.write("<h4>Invalid number</h4>")
// }

//-----------------End---------------------//

//--------------Question 07-----------------//

// var secretNumber = 6
// var guessSecretNunber = +prompt("Guess the secret number between 1 to 10: ")


// if(secretNumber === guessSecretNunber && guessSecretNunber>0 &&guessSecretNunber<10 ){
//     console.log("Bingo! Correct answer.");
// }
// else if((guessSecretNunber === ++secretNumber) && (guessSecretNunber>0 &&guessSecretNunber<10)){
//     console.log("Close enough to the correct answer.");
// }
// else{console.log("Try again");
// }

//-----------------End---------------------//

//--------------Question 08-----------------//

// var userNum = +prompt("Enter your number : ")

// var divisible = userNum % 3

// if(divisible === 0){
//     console.log("Your number is divisible by 3.");
// }
// else{
//     console.log("Your number is not divisible by 3.");
// }

//-----------------End---------------------//

//--------------Question 09-----------------//

// var userNum = +prompt("Enter your number : ")

// var divisible = userNum % 2

// if(divisible === 0){
//     console.log("Your number is Even number.");
// }
// else{
//     console.log("Your number is not Odd number.");
// }

//-----------------End---------------------//

//--------------Question 10-----------------//

// var temprature = +prompt("Enter you area temprature: ")

// if(temprature >=40 && temprature <=50){
//     console.log("Your area temprature is "+temprature+"oC: It is too hot outside.");
// }
// else if(temprature >=30 && temprature <=39){
//     console.log("Your area temprature is "+temprature+"oC: The Weather today is Normal.");
// }
// else if(temprature >=20 && temprature <=29){
//     console.log("Your area temprature is "+temprature+"oC: Today’s Weather is cool.");
// }
// else if(temprature >=10 && temprature <=19){
//     console.log("Your area temprature is "+temprature+"oC: OMG! Today’s weather is so Cool.");
// }else {console.log("Invalid temprature");
// }

//-----------------End---------------------//

//--------------Question 11-----------------//

// var num1 = +prompt("Enter your first number ")
// var num2 = +prompt("Enter your second number ")
// var operator = prompt("Choose an operation: +, -, *, /, %, **")

// if (operator === "+") {
//   console.log(num1 + num2);
// } 
// else if (operator === "-") {
//   console.log(num1 - num2);
// } 
// else if (operator === "*") {
//   console.log(num1 * num2);
// } 
// else if (operator === "/") {
//    console.log(num1 / num2); 
// }
// else if (operator === "%") {
//    console.log(num1 % num2); 
// }
// else if (operator === "**") {
//    console.log(num1 ** num2); 
// }else {
//   console.log("Invalid operator selected!");
// }

//-----------------End---------------------//