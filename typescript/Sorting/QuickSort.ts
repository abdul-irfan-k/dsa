class QuickSort {
  static sort<T = number>(data: T[]) {
    this.partition(data, 0, data.length - 1);
    return data;
  }

  private static partition<T = number>(data: T[], start: number, end: number) {
    let i = start;
    let j = end - 1;
    const middle = Math.floor((start + end) / 2);
    const pivot = data[middle];
    if (start >= end) return;
    console.log("partition",data,data[i],data[j],data[middle])
    this.swap(data, middle, end);
    while (i <= j) {
      if (data[i] > pivot && data[j] < pivot) {
        this.swap(data, i, j);
        i++;
        j--;
      }
      if (data[i] <= pivot) {
        i++;
      }
      if (data[j] >= pivot) {
        j--;
      }
    }

     if(i>j){
         this.swap(data,i,end)
         j++
     }
    this.partition(data, 0, j - 1);
    this.partition(data, j + 1, end);
  }

  private static swap<T = number>(data: T[], index1: number, index2: number) {
    const temp = data[index1];
    data[index1] = data[index2];
    data[index2] = temp;
  }
}

console.log(QuickSort.sort([1, 7, 88, 9, 5, 4]));
