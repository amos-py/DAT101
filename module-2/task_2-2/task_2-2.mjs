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

let NOK = Math.round(USD * 8.6);

printOut(USD + "$ is " + NOK + "kr");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let quote = "There is much between heaven and earth that we do not understand.";

printOut("There are "+ quote.length + " characters in the quote.");
printOut("The 19th character in the quote is: " +  quote[19]);
printOut("The 35th character and 8 characters behind in the quote is: " +  quote.substring(35,43));
printOut("The index at which \"earth\" starts in the quote is: " + quote.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let a = 5 > 3;
let b = 7 >= 7;
let c = "a" > "b";
let d = "1" > "a";
let e = "2500" < "abcd";
let f = "arne" != "thomas";
let g = 2 == 5;
let h = "abcd" >= "bcd";

printOut([a, b, c, d, e, f, g, h]);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text1 = parseInt("254");
let text2 = parseInt("57.23");
let text3 = parseInt("25 kroner");

printOut([text1, text2, text3]);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;

printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days2 = 131;

let weeks = Math.floor(days2 / 7);
let remDays = days2 % 7;

printOut(days2 + " dager er det samme som " + weeks + " uker, med " + remDays + " dager igjen.");

printOut(newLine);