// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let tableWords = s.split(" ");
    let short = tableWords[0].length;

    tableWords.map(word => {
        if (word.length < short) {
            short = word.length;
        }
    })

    return short
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
