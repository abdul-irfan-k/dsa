class HashTable {
  private table: Array<any>;
  private size: number;
  constructor(size: number) {
    this.table = new Array(size);
    this.size = 0;
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key: number | string, value: any) {
    //@ts-ignore
    const index = this.hash(key.toString());
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size += 1;
  }
  get(key: number | string) {
    const index = this.hash(key.toString());

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] == key){
          return this.table[index][i]
        }
      }
    }
    return undefined;
  }

  remove(key: number | string) {
    const index = this.hash(key.toString());

    if (this.table[index]) {
      for(let i = 0;i<this.table[index].length;i++){
        if(this.table[index][i][0] == key){
          this.table[index].splice(i,1)
          this.size --
          return true
        }
      }
    }
    return false;
  }
}

const table = new HashTable(50);
table.set("name", "arif");
table.set("class", "bca");
table.set("phone", "55");

console.log(table.get("phone"));
table.remove("phone")
console.log(table.get("phone"));
