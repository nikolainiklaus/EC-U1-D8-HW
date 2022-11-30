// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 3, 8];
let arrayReversed = array.reverse();
console.log(arrayReversed);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log(Math.max(8, 3, 2));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(-9, 0, 1));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let even = []; 
let evenAndOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < evenAndOdd.length; index++) {
    if (evenAndOdd[index] % 2 === 0) {
        even.push(evenAndOdd[index])
    }
}

console.log(even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
let evenAndOdd2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < evenAndOdd2.length; index++) {
    if (evenAndOdd2[index] % 2 === 0) {
        evenAndOdd2.splice([index], 1)
    }
}

console.log("only odds now: ", evenAndOdd2);


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let randomWord = "hello there!"
let newStrg = "";

for (let index = 0; index < randomWord.length; index++) {
    if (randomWord[index] === "a" || randomWord[index] === "e" || 
        randomWord[index] === "i" || randomWord[index] === "o" || 
        randomWord[index] === "u") {
            newStrg = randomWord.replace(randomWord[index], '')
        }
}

console.log(newStrg);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
