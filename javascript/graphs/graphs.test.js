const Graph = require("./Graph");
const Vertex = require("./Vertex");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("correctly add vertices to the graph ", () => {
    const vertex1 = new Vertex("A");
    const vertex2 = new Vertex("B");

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);

    expect(graph.getVertices()).toEqual(["A", "B"]);
  });

  it("correctly add edges between vertices", () => {
    const vertex1 = new Vertex("A");
    const vertex2 = new Vertex("B");
    const vertex3 = new Vertex("C");

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);

    graph.addEdge(vertex1, vertex2, 5);
    graph.addEdge(vertex2, vertex3, 10);

    expect(graph.getNeighbors(vertex1)[0].value).toEqual("B");
    expect(graph.getNeighbors(vertex2)[0].value).toEqual("C");
  });

  it("correctly return the size of the graph entered", () => {
    const vertex1 = new Vertex("A");
    const vertex2 = new Vertex("B");
    const vertex3 = new Vertex("C");

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);

    expect(graph.size()).toBe(3);
  });
  it("correctly retrieve appropriate neighbors with weights", () => {
    const v1 = new Vertex(1);
    const v2 = new Vertex(2);
    graph.addVertex(v1);
    graph.addVertex(v2);
    graph.addEdge(v1, v2, 5);
    const neighbors = graph.getNeighbors(v1);
    expect(neighbors).toContainEqual({"value": 2});
  });

  it("correctly return the proper size of the graph", () => {
    const vertices = [new Vertex(1), new Vertex(2), new Vertex(3)];
    vertices.forEach((vertex) => graph.addVertex(vertex));
    expect(graph.size()).toBe(vertices.length);
  });
  it("correctly work with a graph with one vertex and one edge", () => {
    const v1 = new Vertex(1);
    graph.addVertex(v1);
    graph.addEdge(v1, v1, 5);
  
    const allVertices = graph.getVertices();
    const neighbors = graph.getNeighbors(v1);
    const numberOfVertices = graph.size();
  
    expect(allVertices).toEqual( [1]);
    expect(neighbors).toContainEqual(v1);
    expect(numberOfVertices).toBe(1);
  });
});
