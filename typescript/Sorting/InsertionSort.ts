class InsertionSort {
   static sort(data: Array<number>) {
    for (let i = 1; i <= data.length - 1; i++) {
      let j = i -1;
      let key = data[i];
      while (j >= 0 && data[j] > key) {
        data[j + 1] = data[j];
        j = j-1
      }

      data[j + 1] = key;
    }
    return data
  }
}


console.log(InsertionSort.sort([64, 34, 25, 12, 22, 90, 3]))