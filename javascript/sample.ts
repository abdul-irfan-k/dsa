let arr: Array<number> = [6, 1, 6, 8, 10, 15, 6, 3, 9, 6];

let backStep = 1;
const  len = arr.length;
for (let i = 0; i < arr.length - 4; i++) {
  if (arr[i] == 6) {
    if (arr[len - backStep] == 6) backStep++;

    let temp = arr[i];
    arr[i] = arr[len - backStep];
    arr[len - backStep] = temp;
  }
}
console.log("arr",arr)