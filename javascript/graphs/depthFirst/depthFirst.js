class Node {
  constructor(data) {
    this.data = data;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    function dfs(node) {
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.data);

        for (const neighbor of node.neighbors) {
          dfs(neighbor);
        }
      }
    }

    dfs(startNode);
    return result;
  }

  displayCollection(collection) {
    console.log(collection.join(", "));
  }
}

function depthFirst(graph, startNode) {
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node.data);

      for (const neighbor of node.neighbors) {
        dfs(neighbor);
      }
    }
  }

  dfs(startNode);
  return result;
}

module.exports = { Node, Graph, depthFirst };
