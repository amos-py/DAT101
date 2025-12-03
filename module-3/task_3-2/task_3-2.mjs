"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Count 1-10
for (let part1Index = 1; part1Index <= 10; part1Index++)

printOut(part1Index);
printOut(newLine);

// Count 10-1
for (let part1Index2 = 10; part1Index2 >= 1; part1Index2--)
    
printOut(part1Index2);
printOut(newLine);
    

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// Variable declarations
let part2Number = Math.floor(Math.random() * 60 ) + 1;
let part2Attempts = 0;

// If random number is not exactly 45, repeat code
while(part2Number !== 45 ) {
    part2Number = Math.floor(Math.random() * 60) +1;
    part2Attempts++;
} 

printOut("The number is: " + part2Number);

// Print attempts for fun
printOut("It took " + part2Attempts + " attempts!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// Variable declarations
let part3Number = Math.floor(Math.random() * 1000000 ) + 1;
let part3Attempts = 0;
let part3CalculationTimeStart = Date.now();

// If random number is not exactly 45, repeat code
while(part3Number !== 45 ) {
    part3Number = Math.floor(Math.random() * 1000000) +1;
    part3Attempts++;
} 

// Get duration of calculation
let part3CalculationTime = Date.now() - part3CalculationTimeStart;

// Print correct number, attemps and calculation time
printOut("The number is: " + part3Number);
printOut("It took " + part3Attempts + " attempts, which took " + part3CalculationTime + " milliseconds!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

// Get numbers 2-199
for (let part4Index = 2; part4Index < 200; part4Index++) {

    // Variable declaration
    let modulus = 2;
    let isPrimeNumber = true;

    while (modulus < part4Index) {

        if (part4Index % modulus === 0) {
            isPrimeNumber = false;
            break;
        }

        modulus++;

    }

        if (isPrimeNumber == true) {
        printOut(part4Index);
    }

}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

for (let i = 1; i <= 7; i++) {
    let out = "";
    for (let j = 1; j <= 9; j++) {
        out += "K" + j + "R" + i + " ";
    }

    printOut(out);

}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

let points = [];
for (let i = 1; i <= 6; i++) {
    points.push(Math.floor(Math.random() * 236 + 1));
}

let grades = [];
for (const point of points) {
    let percentage = point / 236 * 100;
    if (percentage <= 40) {
        grades.push("F");
    } else if (percentage <= 52) {
        grades.push("E");
    } else if (percentage <= 64) {
        grades.push("D");
    } else if (percentage <= 76) {
        grades.push("C");
    } else if (percentage <= 88) {
        grades.push("B");
    } else if (percentage <= 100) {
        grades.push("A");
    }
}

for (let i = 0; i < 5; i++) {
    printOut(points[i] + " Equals an: " + grades[i]);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let throws = 0;
let straightThrows = 0;
let yahtzeeThrows = 0;
let towerThrows = 0;
let threePairThrows = 0;


while (true) {
    let diceValue = [];
    for (let i = 1; i <= 6; i++) {
        diceValue.push(Math.floor(Math.random() * 6 + 1));
    }

    throws++;

    if (straightThrows == 0) {
        let hasStraight = true;
        for (let i = 1; i <= 6; i++) {
            if (!diceValue.includes(i)) {
                hasStraight = false;
                break;
            }
        }
        if (hasStraight) {
            straightThrows = throws;
        }
    }


    let pairs = 0;
    let quads = false;
    let yahtzee = false;

    for (let i = 1; i <= 6; i++) {
        const count = diceValue.filter(item => item === i).length;
        if (count == 6) {
            yahtzee = true;
        } else if (count >= 4) {
            quads = true;
        } else if (count >= 2) {
            pairs++;
        }
    }

    if (yahtzee && yahtzeeThrows == 0) {
        yahtzeeThrows = throws;
        printOut("Terninger: " + diceValue);
        printOut("Yahtzee på: " + yahtzeeThrows + " kast!");
        printOut(newLine);

    }

    else if (pairs == 1 && quads && towerThrows == 0) {
        towerThrows = throws;
        printOut("Terninger: " + diceValue);
        printOut("Tower på: " + towerThrows + " kast!");
        printOut(newLine);

    }

    else if (pairs == 3 && threePairThrows == 0) {
        threePairThrows = throws;
        printOut("Terninger: " + diceValue);
        printOut("Tre par på: " + threePairThrows + " kast!");
        printOut(newLine);

    }

    else if (straightThrows != 0 && yahtzeeThrows != 0 && towerThrows != 0 && threePairThrows != 0) {
        printOut("Terninger: " + diceValue);
        printOut("Straight på: " + straightThrows + " kast!");
        printOut(newLine);
        break
    }
}


printOut(newLine);