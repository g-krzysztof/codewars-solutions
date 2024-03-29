// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


function score(dice) {
    let score = 0;
    let throwResults = [];
    dice.map(number => {
        if (throwResults[number] === undefined) { throwResults[number] = 1 }
        else { throwResults[number] = throwResults[number] + 1 }
    })

    throwResults.map((result, index) => {
        if (result > 2) { score = score + (index * (index === 1 ? 1000 : 100)) }
        if (result === 4 && index === 1 || result === 4 && index === 5) { index === 1 ? score = score + 100 : score = score + 50 }
        if (result === 5 && index === 1 || result === 5 && index === 5) { index === 1 ? score = score + 200 : score = score + 100 }
        if (index === 1 && result < 3 || index === 5 && result < 3) { score = score + (result * (index === 1 ? 100 : 50)) }
    })

    return score
}

console.log(score([2, 3, 4, 6, 2]));
console.log(score([5, 5, 5, 5, 1]));



// function score( dice ) {
//     var dc = [0,0,0,0,0,0];
//     var tdr = [1000,200,300,400,500,600];
//     var sdr = [100,0,0,0,50,0];
//     dice.forEach(function(x){ dc[x-1]++; });
//     return dc.reduce(function(s,x,i){ 
//       return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
//     },0);
//   }