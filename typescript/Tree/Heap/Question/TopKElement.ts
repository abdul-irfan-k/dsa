class MinHeap {
    data: number[];
    compareVal: (a: number, b: number) => number;
    constructor(data = new Array()) {
        this.data = data;
        this.compareVal = (a, b) => a - b;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    peek() {
        if (this.size() === 0) {
            return null;
        }
        return this.data[0];
    }

    push(value) {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    percolateUp(index: number) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (
                this.compareVal(
                    this.data[index][0],
                    this.data[parentIndex][0]
                ) < 0
            ) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    percolateDown(index: number) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(
                    this.data[leftIndex][0],
                    this.data[findIndex][0]
                ) < 0
            ) {
                findIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.data[rightIndex][0],
                    this.data[findIndex][0]
                ) < 0
            ) {
                findIndex = rightIndex;
            }

            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1],
        ];
    }

    size() {
        return this.data.length;
    }
}



function topKFrequent(nums: number[], k: number): number[] {


    const numberRepetation = new Map()
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        if (numberRepetation.has(element)) numberRepetation.set(element, numberRepetation.get(element) + 1)
        else numberRepetation.set(element, 1)
    }

    const topKElement = new MinHeap()
    for (let [item, repetation] of numberRepetation) {
        topKElement.push([repetation, item])
        if (topKElement.size() > k) {
            topKElement.pop()
        }
    }

    const result: number[] = []
    while (topKElement.size() > 0) {
        result.push(topKElement.pop()[1])
    }

    return result
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 1))
