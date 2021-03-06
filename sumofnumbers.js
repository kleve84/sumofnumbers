const test = [1, 2, 3, 4];

function sumFor(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumFor(test));

function sumWhile(numbers){
  let total = 0;
  let x = 0;
  while(x < numbers.length) {
    total += numbers[x];
    x++;
  }
  return total;
}
console.log(sumWhile(test));

function sumRecursion(numbers) {
  if (numbers.length === 0)
    return 0;
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function(memo, num) { return memo + num;}, 0);
}
console.log(sumRecursion(test));