// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  return operation == '+' ? value1 + value2
  : operation == '-' ? value1 - value2
  : operation == '*' ? value1 * value2
  : value1 / value2
}

basicOp('+', 4, 7)


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


// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    if (base % factor == 0){
          return true
      } else {
          return false
      }
  }


  checkForFactor(2, 6)
  // should return True


//   Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n <= 0 || m <= 0){
    return 0
  } else {
    return(m * n)
  }
}

// commit message: "today's codewars"

