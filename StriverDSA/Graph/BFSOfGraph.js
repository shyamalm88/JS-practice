// function BFS
//    Initialize an empty queue, empty 'result' array & a 'visited' map
//    Add the starting vertex to the queue & visited map
//    While Queue is not empty:
//      - Dequeue and store current vertex
//      - Push current vertex to result array
//      - Iterate through current vertex's adjacency list:
//        - For each adjacent vertex, if vertex is unvisited:
//          - Add vertex to visited map
//          - Enqueue vertex
//    Return result array

const BFSGraph = (startingNode) => {
  const q = [startingNode];
  const result = [];
  const visited = {};
  visited[startingNode] = true;
  let currentVertex;
  while (q.length) {
    currentVertex = q.shift();
    result.push(currentVertex);
    this.adjList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    });
  }
  return result;
};
