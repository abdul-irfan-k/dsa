// function sortColors(nums: number[]): void {
//     let c0 = 0
//     let c1 = 0
//     let c2 = 0
//     let k = 0

//     for(let i =0;i<nums.length;i++){
//         if(nums[i] == 0)c0++
//         if(nums[i] == 1)c1++
//         if(nums[i] == 2)c2++
//     }

//     for(let i = 0;i<c0;i++)nums[k++] = 0
//     for(let i = 0;i<c1;i++)nums[k++] = 1
//     for(let i = 0;i<c2;i++)nums[k++] = 2
// };


// Dutch National flag algorithm. 
function sortColors(nums: number[]): void {
   let low = 0
   let mid = 0
   let high = nums.length-1

   while(mid <= high){
    if(nums[mid] == 0){
        [nums[low], nums[mid]] = [nums[mid], nums[low]]
        low++
        mid++
    }
    else if(nums[mid] == 1)mid++
    else {
        [nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--
    }
   }
}


let arr = [2,0,2,1,1,0];
sortColors(arr)
console.log(arr)
 arr =[2,0,1];
sortColors(arr)
console.log(arr)