class QuickSort {
  static sort<T = number>(data: T[]) {
    this.partition(data, 0, data.length - 1);
    return data;
  }

  private static partition<T = number>(data: T[], start: number, end: number) {
    let i = start + 1;
    let j = end;
    const pivot = data[start];
    if (start >= end) return 
    while (i <= j) {
      if (data[i] > pivot && data[j] < pivot) {
        this.swap(data, i, j);
        i++;
        j--;
      } if (data[i] <= pivot) {
        i++;
      }  if (data[j] >= pivot) {
        j--;
      }
    }

    this.swap(data, j, start);
    this.partition(data, start, j - 1);
    this.partition(data, j + 1, end);
  }

  private static swap<T = number>(data: T[], index1: number, index2: number) {
    const temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
  }
}

console.log(QuickSort.sort([4, 7, 8, 9, 5, 1]));
