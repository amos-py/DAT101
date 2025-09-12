"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const x = (2 + 3 * (2 - 4) * 6);
const y = (2 + 3 * 2 - 4 * 6);

printOut("2 + 3 * (2 - 4) * 6 = " + x);
printOut("2 + 3 * 2 - 4 * 6 = " + y);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const meters = 25.34;
const inches = meters / 0.0254;
printOut(meters + " meters is the same as " + inches.toFixed(2) + " inches");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const totalMinutes = (days * 24 * 60) + (hours * 60) + (minutes) + (seconds / 60);

printOut("3 days, 12 hours, 14 minutes and 45 seconds converted to minutes is " + totalMinutes + " minutes");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalMinutes1 = 6322.52;

const days1 = totalMinutes / 60 / 24;
const hours1 = totalMinutes / 60;
const minutes1 = totalMinutes;
const seconds1 = totalMinutes * 60;

printOut(totalMinutes1 + " minutes is the same as " + days1 + " days, " + hours1 + " hours " + minutes1 + " minutes and " + seconds1 + " seconds");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let USD = 54
let exhangeRate = 8.6

let NOK = USD * 8.6;

printOut(NOK);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);