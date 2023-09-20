class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(src, dest, cost) {
    if (!this.graph[src]) {
      this.graph[src] = {};
    }
    this.graph[src][dest] = cost;
  }

  getCost(path) {
    let cost = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const src = path[i];
      const dest = path[i + 1];
      if (this.graph[src] && this.graph[src][dest]) {
        cost += this.graph[src][dest];
      } else {
        return null;
      }
    }
    return cost;
  }
}

function businessTrip(graph, cities) {
  if (!cities || cities.length < 2) {
    return null;
  }

  const g = new Graph();

  for (const [src, dest, cost] of graph) {
    g.addEdge(src, dest, cost);
  }

  const totalCost = g.getCost(cities);

  return totalCost !== null ? `$${totalCost}` : null;
}

module.exports = { Graph, businessTrip }; // Export both Graph and businessTrip
