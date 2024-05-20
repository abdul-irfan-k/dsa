class binarySearch {
  static search<T = number>(values: Array<T>, target: T) {
    let low = 0;
    let high = values.length - 1;
    let middles = Math.floor((high + low) / 2);

    while (low <= high) {
      if (target == values[middles]) return values[middles];
      if (target > values[middles]) {
        low = middles + 1;
        middles = Math.floor((high + low) / 2);
      } else if (target < values[middles]) {
        high = middles - 1;
        middles = Math.floor((high + low) / 2);
      }
    }
    return null;
  }
}

const sampleData = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch.search(sampleData,100))