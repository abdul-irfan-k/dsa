import { Queue } from "../Queue/Queue";
import { Stack } from "../Stack/Stack";

export class Graph<T> {
  graph = new Map<T, Array<T>>();

  addVertex(data: T) {
    this.graph.set(data, []);
  }

  addMultipleEmptyVertex(data: T[]) {
    data.reduce((accumulator, key) => accumulator.set(key, []), this.graph);
  }
  addEdge(vertex: T, vertexEdge: T, isBiDirectional?: boolean) {
    if (!this.graph.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.graph.has(vertexEdge)) {
      this.addVertex(vertexEdge);
    }
    if (this.checkIsNotContainedSameEdge(vertex, vertexEdge))
      this.graph.get(vertex)?.push(vertexEdge);
    if (
      isBiDirectional &&
      this.checkIsNotContainedSameEdge(vertexEdge, vertex)
    ) {
      this.graph.get(vertexEdge)?.push(vertex);
    }
  }

  removeVertex() {}

  display() {
    this.graph.forEach((vertexEdge, vertex) => {
      let str = vertex + " --> ";
      vertexEdge.forEach((edgeValue) => (str += `${edgeValue} `));
      console.log(str);
    });
  }

  private checkIsNotContainedSameEdge(vertex: T, vertexEdge: T): boolean {
    return this.graph.get(vertex)?.indexOf(vertexEdge) == -1;
  }

  bredthFirstSearch(staringVertex: T) {
    const visitedVertex: T[] = [];
    const queue = new Queue<T>();
    queue.enqueue(staringVertex);
    visitedVertex.push(staringVertex);

    while (!queue.isEmpty()) {
      const frontElement = queue.peek();
      if (frontElement == null) return;
      console.log("front element ",frontElement.data)
      queue.dequeue();
      this.graph.get(frontElement?.data)?.forEach((nearestVertex) => {
        if (visitedVertex.indexOf(nearestVertex) < 0) {
          queue.enqueue(nearestVertex);
          visitedVertex.push(nearestVertex);
        } 
        
      });
    }
    console.log(visitedVertex)
}
}


