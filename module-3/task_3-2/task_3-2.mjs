"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let i = 1; i <= 10; i++)
printOut(i);

printOut(newLine);

for (let x = 10; x >= 1; x--)
printOut(x);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = Math.floor(Math.random() * 60 ) + 1;

while(number !== 45 ) {
    number = Math.floor(Math.random() * 60) +1;
} 

printOut("The number is: " + number);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code    x below here!*/

let correctNumber = 500000
let randomNumber = Math.floor(Math.random() * 1000000) + 1;
let guesses = 0;

while (randomNumber !== 500000) {
    randomNumber = Math.floor(Math.random() * 1000000) + 1;
    guesses++;
}

printOut("It took " + guesses);


printOut("Replace this with you answer!");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

for (let x = 2; x <= 200; x++) {
    if (x % x && 1) {
        printOut(x)

    }
}

printOut();


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) {
  let line = "";
  for (let k = 1; k <= 9; k++) {
    line += `K${k}R${r}`;
    if (k < 9) line += " ";
  }
  printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

for(let i6 = 1; i6 <= 6; i6++) {
    const grades = Math.floor(Math.random() * 236) + 1;
    printOut(grades);
}

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


// Eksamensoppgave

class TCDAlbum
{
    #artist;
    #title;
    #year;
    #genre;
    constructor(aArtist, aTitle, aYear, aGenre)
    {
        this.#artist = aArtist;
        this.#title = aTitle;
        this.#year = aYear;
        this.#genre = aGenre;
        this.rating = 0;
    }
    printOut(){
        printOut(`
            artist: ${this.#artist}, 
            title: ${this.#title}, 
            year: ${this.#year}, 
            genre: ${this.#genre}, 
            rating: ${this.rating}`);
    }
}

const newCD = new TCDAlbum(
    "Pink Floyd", 
    "The Dark Side of the Moon", 
    1973, 
    "Progressive Rock");

cd1.rating = 5;
cd1.printOut();
