//----------------Chapter 14 to 16-----------//

//------------------Question 01---------------//

// var studentNames = [];

// studentNames[0]=("Ali");
// studentNames[1]=("Alia");
// studentNames[2]=("Aliza");

// studentNames[4]=("Sara");
// console.log(studentNames);

//---------------------End--------------------//

//------------------Question 02---------------//

// var studentNames = new Array();

// studentNames[0]=("Alia Zada");
// studentNames[1]=("Ali");
// studentNames[2]=("Alizain");

// studentNames[4]=("Sara");
// console.log(studentNames);

//---------------------End--------------------//

//------------------Question 03---------------//

// var fruits = ["Apple", "Banana", "Cherry", "Mango"];

// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Cherry

//---------------------End--------------------//

//------------------Question 04---------------//

// var number = ["24", "45", "56", "98"];

// console.log(number [0]); // 24
// console.log(number [2]); // 56

//---------------------End--------------------//

//------------------Question 05---------------//

// var boolean = [true, false];

// console.log(boolean[0]); // true
// console.log(boolean[1]); // false

//---------------------End--------------------//

//------------------Question 06---------------//

// var mixArray = [true, "Aliazain", false, 25, 56];

// console.log(mixArray[0]); // true
// console.log(mixArray[1]); // false
// console.log(mixArray[3]); // 25

//---------------------End--------------------//

//------------------Question 07---------------//

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications in Pakistan:</h2>");
// for(var i =0; i<qualifications.length; i++){
//     document.write((i+1) + ")" + qualifications[i] + "<br/>")
// }

//---------------------End--------------------//

//------------------Question 08---------------//

// var studentName = ["Alizain", "Bilal", "Imran"];
// var studentScore = [230, 320, 480];
// var totalNum = 500;

// for (var i = 0; i < studentName.length; i++) {
//   console.log(
//     "Score of " +studentName[i] + " is " + studentScore[i] +". Percentage:" +(studentScore[i] / totalNum) * 100 +"%");
// }

//---------------------End--------------------//

//------------------Question 09---------------//

// var color = ['red', 'yellow', 'blue', 'green']
// console.log(color);

//---Question 09-a---//
// color.unshift( prompt('what color you want to add to the beginning of list: '))
// console.log(color);

//---Question 09-b---//
// color.push(prompt('what color you want to add to the end of list: '))
// console.log(color);

//---Question 09-c---//
// color.unshift( prompt('what first name of colors you want to add to the beginning of list: '))
// color.unshift( prompt('what second name of colors you want to add to the beginning of list: '))
// console.log(color);

//---Question 09-d---//
// color.shift()
// console.log(color);

//---Question 09-e---//
// color.pop()
// console.log(color);

//---Question 09-f---//
// var userColor = prompt('what color you want to add of list: ')
// var userIndex = prompt('what you want to add in which index of list: ')
// color.splice (userIndex,0,userColor)
// console.log(color);

//---Question 09-g---//
// var userIndexDel = prompt('what you want to add in which index of list: ')
// color.splice (userIndexDel)
// console.log(color);

//---------------------End--------------------//

//------------------Question 10---------------//

// var studentScores =[320,230,480,120]
// console.log("Scores of Students: " + studentScores);
// console.log("Ordered Scores of Students: " + studentScores.sort());


//---------------------End--------------------//

//------------------Question 11---------------//

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log("Cities List: " + cities);
// var selectedCities = cities.slice(1, 4);  
// console.log("Selected Cities List: " + selectedCities);

//---------------------End--------------------//

//------------------Question 12---------------//

// var arr = ["This", "is", "my", "cat"];

// var singleString = arr.join(" "); 

// console.log("Array: " + arr);
// console.log("String: " + singleString);

//---------------------End--------------------//

//------------------Question 13---------------//

// FIFO-First In First Out (push & shift)
// var queue = [];
// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// console.log("Devices in Queue: " + queue);
// console.log("Out: " + queue.shift()); // removes "Keyboard"
// console.log("Out: " + queue.shift()); // removes "Mouse"
// console.log("Out: " + queue.shift()); // removes "Printer"
// console.log("Out: " + queue.shift()); // removes "Monitor");

//---------------------End--------------------//

//------------------Question 14---------------//

// LIFO-Last In First Out (push & pop)
// var stack = [];

// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Printer");
// stack.push("Monitor");

// console.log("Devices in Stack: " + stack);

// console.log("Out: " + stack.pop()); // removes "Monitor"
// console.log("Out: " + stack.pop()); // removes "Printer"
// console.log("Out: " + stack.pop()); // removes "Mouse"
// console.log("Out: " + stack.pop()); // removes "Keyboard");

//---------------------End--------------------//

//------------------Question 14---------------//

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
//     }

// document.write("</select>");

//---------------------End--------------------//