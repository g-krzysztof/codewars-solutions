// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((character) => character.charCodeAt() - 64)
        .join(' ');
}

console.log(alphabetPosition("Tutaj daje8&;'my 1yt1 tekst Zz1!@`"));

// --------------------------------------------------------------------

// function alphabetPosition(text) {

//     let textSplit = text;
//     textSplit = textSplit.toLowerCase();

//     textSplit = textSplit.split("");
//     let reg = /^[a-z]+$/i;

//     textSplit = textSplit.filter(letter => reg.test(letter));

//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let alphabetTable = alphabet.split("");

//     textSplit = textSplit.map(letter => {

//         for (let i = 0; i < alphabetTable.length; i++) {
//             if (letter === alphabetTable[i]) {
//                 letter = i + 1;
//                 return letter
//             }
//         }
//     })

//     textSplit = textSplit.join(" ");

//     return textSplit;
// }

// ------------------------------------------------------------

// 'ABC'.charCodeAt(0); // returns 65

// console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="
