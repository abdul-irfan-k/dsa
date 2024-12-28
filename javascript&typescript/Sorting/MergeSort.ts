class MergeSort {
  static sort<T = number>(data: T[]) {
    return this.sortHelper(data);
  }
  private static sortHelper<T = number>(data: Array<T>): T[] {
    if (data.length <= 1) return data;

    const middle = Math.floor(data.length - 1 / 2);
    const firstArray = data.slice(0, middle);
    const lastArray = data.slice(middle);
    return this.merge(
      this.sortHelper(firstArray),
      this.sortHelper(lastArray)
    );
  }
  private static merge<T = number>(firstData: Array<T>, lastData: Array<T>) {
    const sortedArray: Array<T> = new Array();
    let i = 0;
    let j = 0;
    let k = 0;

    while (i <= firstData.length - 1 && j <= lastData.length -1) {
      if (firstData[i] < lastData[j]) {
        sortedArray[k++] = firstData[i++];
      } else {
        sortedArray[k++] = lastData[j++];
      }
    }

    while (i <= firstData.length - 1) {
      sortedArray[k++] = firstData[i++];
    }

    while (j <= lastData.length - 1) {
      sortedArray[k++] = lastData[j++];
    }

    return sortedArray;
  }
}

console.log(MergeSort.sort([5, 3, 2, 1, 7, 4]));
