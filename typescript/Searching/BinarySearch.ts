class binarySearch {
  static search<T = number>(values: Array<T>, target: T) {
    let low = 0;
    let high = values.length - 1;
    let middle = 0;
    while (low <= high) {
      middle = Math.floor((high + low) / 2);
      if (target == values[middle]) return middle;
      if (target > values[middle]) low = middle + 1;
      else high = middle - 1;
    }
    return -1;
  }
}


class BinarySearchInRecursion {
    static search<T = number>(){

    }
    static searchHelper<T = number>(values:Array<T>,low:T,end:T,){

    }
}

// const sampleData = [2, 5, 8, 12, 16, 23, 38, 56, 72];
// console.log(binarySearch.search(sampleData, 55));
