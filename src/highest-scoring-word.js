// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {

    let tableWords = x.toUpperCase().split(" ").map(word => {

        let newWord = [];
        for (let i = 0; i < word.length; i++) {
            newWord.push(word.charCodeAt(i) - 64);
        }

        newWord = newWord.reduce((a, b) => {
            let c = parseInt(a) + parseInt(b);
            return c
        }, 0);
        return newWord
    });

    let hightScore = 0;
    tableWords.map(word => {
        if (word > hightScore) { hightScore = word; }
    })

    let indexScore = 0;
    tableWords.filter(word => {
        if (word === hightScore) {
            indexScore = tableWords.indexOf(word);
        }
    });

    let resultTableStrings = x.split(" ");
    return resultTableStrings[indexScore]
}

console.log(high('what time are we climbing up the volcano'));
console.log(high('man i need a taxi up to ubud'));



// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }

// ----------------------------------------------------------------------------------

// const { compose, reduce, split } = require('ramda');

// const score = compose(
//   reduce((r, v) => r + v.charCodeAt() - 96, 0),
//   split('')
// );

// const high = compose(
//   reduce((r, v) => score(v) > score(r) ? v : r, ''),
//   split(' ')
// );

// ---------------------------------------------------------------------------------

// function high(x){
//     //transform the input string into array & define a string of alphabetical latin characters
//     var arr = x.split(' ');
//     var str = 'abcdefghijklmnopqrstuvwxyz';
//     //Iterate through the array with input words to find the one with the greatest sum
//     var newArr = arr.map(function(word){
//       var sum = 0;
//       for (var i = 0; i < word.length; i++) {
//         sum += str.indexOf(word[i]);
//       }
//       return sum;
//     });
//     //Return the word with the greatest sum
//     return arr[newArr.indexOf(Math.max(...newArr))];
//   }

