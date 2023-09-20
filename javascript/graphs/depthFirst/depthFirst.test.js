const { Node, Graph, depthFirst } = require("./depthFirst"); // Adjust the path as needed

describe("Node", () => {
  test("Node should initialize data and neighbors", () => {
    const node = new Node("A");
    expect(node.data).toBe("A");
    expect(node.neighbors).toEqual([]);
  });

  // Add more Node test cases here if needed
});

describe("Graph", () => {
  test("Graph should initialize nodes", () => {
    const graph = new Graph();
    expect(graph.nodes).toEqual([]);
  });

  // Add more Graph test cases here if needed
});

describe("depthFirst", () => {
  test("depthFirst should return the correct traversal order", () => {
    const graph = new Graph();

    const nodeA = new Node("A");


    // Set up your graph nodes and neighbors here

    graph.addNode(nodeA);

    const traversalOrder = depthFirst(graph, nodeA);
    expect(traversalOrder).toEqual(["A"]);
  });

  // Add more depthFirst test cases here if needed
});
