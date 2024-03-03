function digitize(n) {
    //code here
    const array = n.toString().split('').reverse();
    const newArray = array.map((element) => parseInt(element));
    return newArray;
  }