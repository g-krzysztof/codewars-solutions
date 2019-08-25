// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

var uniqueInOrder = function (iterable) {
    let getIterable = iterable;
    if (typeof getIterable === "string") {
        getIterable = getIterable.split("");
    }

    let filterIterable = getIterable.filter((item, index) => {
        if (index === 0) return item;
        if (index > 0) {
            if (item !== getIterable[index - 1]) {
                return item;
            } else return false;
        }
    })
    console.log(filterIterable);

    return filterIterable
}

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder(['A', 'A', 'B', 'C', 'D', 'D'])

// best solution

// function uniqueInOrder(it) {
//     var result = []
//     var last

//     for (var i = 0; i < it.length; i++) {
//         if (it[i] !== last) {
//             result.push(last = it[i])
//         }
//     }

//     return result
// }