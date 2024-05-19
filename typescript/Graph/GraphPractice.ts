import { Graph } from "./Graph";

// const graph = new Graph<string>()
// graph.addMultipleEmptyVertex(['A','B','C','D','E','F'])

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'D');
// graph.addEdge('A', 'E');
// graph.addEdge('B', 'C');
// graph.addEdge('D', 'E');
// graph.addEdge('E', 'F');
// graph.addEdge('E', 'C');
// graph.addEdge('C', 'F',true);
// graph.addEdge('C', 'E',true);
// graph.display()



const graph = new Graph<number>()
graph.addMultipleEmptyVertex([1,2,3,4,5,6,7,8,9])
graph.addEdge(1,2,true)
graph.addEdge(1,6,true)
graph.addEdge(2,3,true)
graph.addEdge(2,4,true)
graph.addEdge(6,7,true)
graph.addEdge(6,9,true)
graph.addEdge(7,8)
graph.addEdge(4,5)

graph.bredthFirstSearch(1)