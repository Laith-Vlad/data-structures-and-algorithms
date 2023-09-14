"use strict";

const Edge = require("./Edge");
const Vertex = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error("Start or end vertex does not exist in the graph.");
    }
    const startVertexEdges = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);
    startVertexEdges.push(edge);
  }

  getVertices() {
    const vertices = [];
    for (const vertex of this.adjacencyList.keys()) {
      vertices.push(vertex.value);
    }
    return vertices;
  }
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error("Vertex not found in the graph.");
    }

    const neighbors = this.adjacencyList.get(vertex);
    const arr = [];
    for (const neighborEdge of neighbors) {
      arr.push(neighborEdge.vertex);
    }
    return arr;
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    let queue = [];
    let visitedNodes = new Set();
    let result = [];
    queue.push(startNode);
    visitedNodes.add(startNode);

    result.push(startNode.value);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (!visitedNodes.has(neighborNode)) {
          visitedNodes.add(neighborNode);
          result.push(neighborNode.value);
          queue.push(neighborNode);
        }
      }
    }
    return result;
  }
}

module.exports = Graph;
