"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 8;

if (wakeUpTime <= 7) 
  printOut("I can take the bus to school.");
  
else if (wakeUpTime == 8) {
  printOut("I can take the train to school");
}

else {
  printOut("I have to take the car to school");

}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let intValue = -1;

if (intValue >= 1) {
  printOut("The number is positive");

}

else if (intValue == 0) {
  printOut("The number is zero");
}

else {
  printOut("The number is negative");
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let minNumber = 1;
let maxNumber = 8;

let photoSize = Math.floor(Math.random() * (maxNumber - minNumber));

let desiredSize = 4;

if (photoSize <= desiredSize) {
  printOut("The image is too small");
}

else if (photoSize >= 6) {
  printOut("The image is too large");
}

else {
  printOut("Thank You");
}

printOut(photoSize);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth = monthList.length;

const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthList.indexOf("r")) {
  printOut("You must take vitamin D");
}

else {
  printOut("You do not need to take vitamin D");
}

let currentMonth = monthList[8];


printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
printOut("There are " + daysInMonths[8] + " days in " + currentMonth);

printOut(newLine);



printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let inputMonth = 3;

if (inputMonth <= 2) {
  printOut("The gallery is open");
}

else if (inputMonth = 4) {
  printOut("The gallery is open");
}

else {
  printOut("The gallery is closed");
}



printOut(newLine);
