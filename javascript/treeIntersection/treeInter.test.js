const {
  tree1,
  tree2,
  tree3,
  tree4,
  tree5,
  tree6,
} = require("./treesForTesting"); // Adjust the path as needed
const faretZayton = require("./treeIntersection"); // Import your faretZayton function

describe("faretZayton function", () => {
  it("should return an array of common elements between two trees", () => {
    const result = faretZayton(tree1, tree2);
    const expected = [500, 200, 100, 175, 125, 350, 160];

    expect(result).toEqual(expected);
  });

  it("should return an empty array when there are no common elements", () => {
    const result = faretZayton(tree3, tree4);

    expect(result).toEqual([]);
  });

  it("should handle trees with different structures", () => {
    const result = faretZayton(tree5, tree6);
    const expected = []; // Since there are no common elements

    expect(result).toEqual(expected);
  });
});
