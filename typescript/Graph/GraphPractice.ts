import { Graph } from "./Graph";

const graph = new Graph<string>()
graph.addMultipleEmptyVertex(['A','B','C','D','E','F'])

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F',true);
graph.addEdge('C', 'E',true);
graph.display()