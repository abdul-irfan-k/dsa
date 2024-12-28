class BubbleSort {
  static sort<T = number>(data: Array<T>) {
    let swapped = false;
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          this.swap(data, j, j + 1);
          swapped = true;
        }
      }
      if (!swapped) break;
    }

    return data;
  }

  private static swap<T = number>(data: Array<T>, i: number, j: number) {
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
}

console.log(BubbleSort.sort([64, 34, 25, 12, 22, 90, 3]));
