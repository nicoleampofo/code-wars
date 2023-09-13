// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// params: an array
// returns: one non-array number, which is the sum of two numbers
// examples: [19, 5, 42, 2, 77] returns 7
// pseudocode:
    // sort the array
    // add the two lowest numbers
    // return the two lowest numbers

function sumOfTwoLowest(arr){
    let sortedArr = arr.sort(function(a, b){return a - b})
    let twoLowest = (sortedArr[0] + sortedArr[1])
    console.log(twoLowest)
}

sumOfTwoLowest([22, 8, 5, 19, 12])
