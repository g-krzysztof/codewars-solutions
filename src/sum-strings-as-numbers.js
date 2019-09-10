// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {

    let substractLength = a.length - b.length;

    if (substractLength > 0) {

        let counter = a.length - b.length;
        a = "0." + a;

        let counterPoints = "0.";
        for (let i = 0; i < counter; i++) {
            counterPoints = counterPoints + "0";

        }
        b = counterPoints + b;

        console.log(a, b);


        let aNumb;
        let bNumb;
        if (a === "0.") { aNumb = 0; } else { aNumb = Number(a); }
        if (b === "0.") { bNumb = 0; } else { bNumb = Number(b); }
        let sum = (aNumb + bNumb).toString();
        sum = sum.substring(2);

        return sum
    }

    if (substractLength < 0) {

        let counter = b.length - a.length;
        b = "0." + b;
        let counterPoints = "0.";
        for (let i = 0; i < counter; i++) {
            counterPoints = counterPoints + "0";
        }
        a = counterPoints + a;

        let aNumb;
        let bNumb;
        if (a === "0.") { aNumb = 0; } else { aNumb = Number(a); }
        if (b === "0.") { bNumb = 0; } else { bNumb = Number(b); }
        let sum = (aNumb + bNumb).toString();
        sum = sum.substring(2);

        return sum
    }

    if (substractLength === 0) {
        a = "0." + a;
        b = "0." + b;

        let aNumb;
        let bNumb;
        if (a === "0.") { aNumb = 0; } else { aNumb = Number(a); }
        if (b === "0.") { bNumb = 0; } else { bNumb = Number(b); }
        let sum = (aNumb + bNumb).toString();
        sum = sum.substring(2);

        return sum
    }
}

// console.log((sumStrings('123', '456')));
// console.log((sumStrings('1587', '456')));
// console.log((sumStrings('1587', '587456')));
console.log((sumStrings('99', '1')));
