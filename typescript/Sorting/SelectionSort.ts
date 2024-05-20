class SelectionSort {
  static sort(data: Array<number>) {
    for (let i = 0; i < data.length - 1; i++) {
      let min = data[i];
      let minIndex = i;
      for (let j = i; j < data.length -1; j++) {
        if (min > data[j+1]) {
          min = data[j+1];
          minIndex = j+1;
        }
      }
      this.swap(data, i, minIndex);
    }
    return data;
  }

  private static swap(data: Array<number>, i: number, j: number) {
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
}

console.log(SelectionSort.sort([64, 34, 25, 12, 22, 90, 3]));
