function printNumber(n:number){
    if(n<=1){
        return 
    }

    printNumber(n-1)
    console.log(n)
    printNumber(n-1)
}

printNumber(5)
// 2 2 3 