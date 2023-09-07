// Write a function that takes in two numbers and increments them by the second number.

function countBy(x, n) {
  var z = []
  for (var i = 1; i <= n; i++) {
    z.push(x * i);
  }
  console.log(z)
}

countBy(2,5)