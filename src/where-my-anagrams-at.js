// Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    let anagrams = [];

    words.map(testedWord => {
        if (testedWord.length === word.length) {
            let wordCharArray = word.split('');
            testedWord.split('').filter(char => {

                for (let i = 0; i < wordCharArray.length; i++) {
                    if (char === wordCharArray[i]) {
                        wordCharArray.splice(i, 1);
                    }
                }

            });
            if (wordCharArray.length === 0) { anagrams.push(testedWord) }
        }
    });
    return anagrams
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));


// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));

// function anagrams(word, words) {
//     return words.filter(function (e) {
//         return e.split('').sort().join('') === word.split('').sort().join('');
//     })
// }