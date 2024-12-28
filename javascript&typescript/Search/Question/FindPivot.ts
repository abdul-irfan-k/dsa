class PivotFinder {
  static find(data: Array<number>): number {
    let start = 0;
    let end = data.length - 1;

    while (start < end) {
      const middle = Math.floor((start + end) / 2);
      const middleElement = data[middle];
      if(middleElement < data[0] ){
        end = middle
      }
      else  {
        start = middle +1
      }    }
    return data[start]
  }
}


console.log(PivotFinder.find([7,1,2,3,5,6]))