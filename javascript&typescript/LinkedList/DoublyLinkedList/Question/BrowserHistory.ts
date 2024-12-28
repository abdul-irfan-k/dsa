export class Node {
  public next: Node | null = null;
  public prev: Node | null = null;
  constructor(public data: string) { }
}

class BrowserHistory {
  currentPage: Node | null;

  constructor(homepage: string) {
    this.currentPage = new Node(homepage);
  }

  visit(url: string): void {
    const newPage = new Node(url);
    newPage.prev = this.currentPage;
    if (this.currentPage != null) this.currentPage.next = newPage;
    this.currentPage = newPage
  }

  back(steps: number): string {
    for (let i = steps; i > 0; i--) {
      if (this.currentPage?.prev == null) return this.currentPage?.data ?? "";
      this.currentPage = this.currentPage.prev;
    }
    return this.currentPage?.data  ?? ""
  }

  forward(steps: number): string {
    for (let i = steps; i > 0; i--) {
      if (this.currentPage?.next == null) return this.currentPage?.data ?? ""
      this.currentPage = this.currentPage.next
    }
    return this.currentPage?.data ?? ""
  }
}



function broswerHistoryValidator(vals: Array<any>, args: Array<any>) {
  let history:any = null
  vals.forEach((val, index) => {
    if ("BrowserHistory") {
      history = new BrowserHistory(args[index])
      console.log(history)
    }
    else if ("visit")  console.log(history.visit(args[index]))
    else if ("back")  console.log(history.back(args[index]))
    else if ("forward")  console.log(history.forward(args[index]))
  })
console.log(history)
}
broswerHistoryValidator(["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "visit", "forward", "back", "back"], [["leetcode.com"], ["google.com"], ["facebook.com"], ["youtube.com"], [1], [1], [1], ["linkedin.com"], [2], [2], [7]])

const history = new BrowserHistory("a")
history.visit("b")
history.visit("c")
history.visit("d")
console.log(history.back(1))
history.back(1)
history.visit("e")
console.log(history.back(1))
