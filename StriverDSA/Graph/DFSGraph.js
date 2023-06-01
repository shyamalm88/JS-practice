// function DFS
//    Initialize an empty stack, empty 'result' array & a 'visited' map
//    Add the starting vertex to the stack & visited map
//    While Stack is not empty:
//      - Pop and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Push vertex to stack
//    Return result array

const DFSGraph = (startingNode) => {
  const result = [];
  const visited = {};
  visited[startingNode] = true;
  DFS(startingNode, visited, result, this.adjList);
  return result;
};

const DFS = (node, visited, result, adjList) => {
  if (!node) {
    return;
  }
  visited[node] = true;
  result.push(node);
  adjList.forEach((neighbor) => {
    if (!visited[neighbor]) {
      return DFS(neighbor, visited, result, adjList);
    }
  });
};
