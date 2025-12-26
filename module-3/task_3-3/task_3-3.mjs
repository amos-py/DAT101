import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printDate() {
    const currentDate = new Date();
    const today = currentDate.toLocaleString("no-NB");
    printOut("Dagens dato er: " + today);
}

printDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

function Task2PrintDate() {
    const currentDate = new Date();
    const today = currentDate.toLocaleString("no-NB");
    printOut("Dagens dato er: " + today);
}

Task2PrintDate();

function countdown(){
    const countdownDate = new Date("May 14, 2026 00:00:00").getTime();
    printOut("Nedtelling til 14. mai 2026:" + countdownDate);
}

countdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function circleCalculation(radius) {
    const diameter = radius * 2;
    const circumferance = radius * 2 * Math.PI;
    const area = Math.pow(radius, 2) *   Math.PI;

    printOut(diameter);
    printOut(Math.floor(circumferance));
    printOut(Math.floor(area));
}

circleCalculation(10);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function rectangleCalculation(width, height) {
    const circumferance = width + height;
    const area = width * height;
    
    printOut(circumferance);
    printOut(area);
}

rectangleCalculation(50, 20);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

function temperatureConversion(temperature, type) {

    let kelvin; let fahrenheit; let celsius;
    if (type == "kelvin") {
        kelvin = temperature
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        celsius = kelvin - 273.15;
    } else if (type == "fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (type == "celsius") {
        celsius = temperature;
        kelvin = celsius + 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    
    } else {
        printOut("Invalid temperature ID!")
        return
    }
    printOut("Kelvin: " + kelvin);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Celsius: " + celsius);
}

temperatureConversion(30, "kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

function calculateNetPrice(gross, vatGroup) {
  const vatRates = {
    normal: 25,
    food: 15,
    hotel: 10,
    transport: 10,
    cinema: 10
  };
  
  const vat = vatRates[vatGroup.toLowerCase()];
  
  if (vat === undefined) {
    printOut("Unknown VAT group!");
    return NaN
  }
  
  return (100 * gross) / (vat + 100);
}

printOut(`Normal (25%): ${calculateNetPrice(1000, "Normal")}`);
printOut(`Food (15%): ${calculateNetPrice(500, "FOOD")}`);
printOut(`Hotel (10%): ${calculateNetPrice(300, "hotel")}`);
printOut(`Unknown (Goblins): ${calculateNetPrice(200, "goblins")}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
function speedConversion(speed, distance, time) {
    let speed2 = distance / time;
    let distance2 = speed * time;
    let time2 = distance / speed;

    if (!Number.isNaN(speed2)) {
        return [speed2, distance, time]
    }

    if (!Number.isNaN(distance2)) {
        return [speed, distance2, time]
    }

    if (!Number.isNaN(time2)) {
        return [speed, distance, time2]
    }

    return NaN

}

printOut("Speed, distance and time: " + speedConversion(20, 40, NaN));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

function padString(text, maxSize, padChar, insertAfter) {
  if (text.length >= maxSize) {
    return text;
  }
  
  const padding = padChar.repeat(maxSize - text.length);
  return insertAfter ? text + padding : padding + text;
}

printOut(padString("Hello", 10, "*", true));
printOut(padString("World", 10, "-", false));
printOut(padString("Test", 8, ".", true));
printOut(padString("Already long", 5, "x", true));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function checkExpression(lines) {
  let part9num = 1;
  
  for (let line = 1; line <= lines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    

    for (let i = 0; i < line + 1; i++) {
      leftSum += part9num++;
    }
    
    for (let i = 0; i < line; i++) {
      rightSum += part9num++;
    }
    
    if (leftSum !== rightSum) {
      printOut(`Line ${line} failed: ${leftSum} ≠ ${rightSum}`);
      return;
    }
  }
  
  printOut("Maths fun!");
}

checkExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

printOut(`Factorial of 5: ${factorial(5)}`);
printOut(`Factorial of 6: ${factorial(6)}`);
printOut(`Factorial of 10: ${factorial(10)}`);
printOut(newLine);
