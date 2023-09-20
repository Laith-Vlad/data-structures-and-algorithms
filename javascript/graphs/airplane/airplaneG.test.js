const { Graph, businessTrip } = require('./airplaneGraph'); // Replace with the actual path to your implementation file

describe('Graph Class', () => {
  it('should add edges correctly', () => {
    const g = new Graph();
    g.addEdge('A', 'B', 10);
    expect(g.graph['A']['B']).toBe(10);
  });

  it('should calculate cost correctly', () => {
    const g = new Graph();
    g.addEdge('A', 'B', 10);
    g.addEdge('B', 'C', 20);
    expect(g.getCost(['A', 'B', 'C'])).toBe(30);
    expect(g.getCost(['A', 'C'])).toBe(null);
  });
});

describe('businessTrip Function', () => {
  const graph = [
    ['Metroville', 'Pandora', 82],
    ['Arendelle', 'New Monstropolis', 45],
    ['New Monstropolis', 'Naboo', 70],
  ];

  it('should return correct cost for a valid trip', () => {
    expect(businessTrip(graph, ['Metroville', 'Pandora'])).toBe('$82');
    expect(businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo'])).toBe('$115');
  });

  it('should return null for an invalid trip', () => {
    expect(businessTrip(graph, ['Naboo', 'Pandora'])).toBe(null);
    expect(businessTrip(graph, ['Narnia', 'Arendelle', 'Naboo'])).toBe(null);
  });

  it('should return null for an empty trip', () => {
    expect(businessTrip(graph, [])).toBe(null);
  });

  it('should return null for a single-city trip', () => {
    expect(businessTrip(graph, ['Metroville'])).toBe(null);
  });
});
