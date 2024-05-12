class Stack<T> {
  items: T[];
  size: number;
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(data: T): number {
    this.items[this.size] = data;
    this.size += 1;
    return this.size - 1;
  }

  pop(): T | null {
    if (this.size == 0) return null;

    let temp = this.items[this.size - 1];
    this.items.pop();
    this.size -= 1;
    return temp;
  }
  peek(): T | null {
    return this.items[this.size - 1];
  }

  display() {
    if(this.size < 1)return console.log("stack is empty")
    let str = ""
    for(let i = 0;i<this.size;i++){
        str +=`${this.items[i]} `
    }
    console.log(str)
  }
}


// const stackList = new Stack<number | string>()
// stackList.push(10)
// stackList.push(3)
// stackList.push(6)
// stackList.push(34)
// stackList.display()
// stackList.pop()
// stackList.display()
// console.log(stackList.peek())
