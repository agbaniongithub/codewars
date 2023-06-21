function findAverage(array) {
    let sum = 0;
    if (array.length === 0) {
      return 0;
    }
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    average = sum / array.length;
    return average;
  }
  console.log(findAverage([3, 2, 2]));