function sum (numbers) {
  "use strict";
  if(numbers.length === 0) return 0
  let total = 0;
  for (let a = 0; a < numbers.length; a++) {
    total += numbers[a]
  }
  return total
}