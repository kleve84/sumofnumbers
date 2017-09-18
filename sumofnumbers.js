function sumFor(numbers) {
  let sum = 0;
  for (let x = 0; x <= numbers.length; x++) {
    sum += numbers[x];
  }
  return sum;
}

function sumWhile(numbers) {
  let x = 0;
  let sum = 0;
  while (x <= numbers.length) {
    sum += numbers[x];
    x++;
  }
  return sum;
}

function sumRecursion(numbers, l) {
  return numbers[l] + sumRecursion(numbers, l - 1);
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]), 2);
console.log(sumTheSimpleWay([1, 2, 3]));
