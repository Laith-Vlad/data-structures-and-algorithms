class Node {
  constructor(type) {
    this.type = type;
    this.content = [];
  }

  addChildNode(node) {
    this.content.push(node);
  }

  countFiles() {
    if (this.type === 'file') {
      return 1;
    }

    let fileCount = 0;
    for (const childNode of this.content) {
      fileCount += childNode.countFiles();
    }

    return fileCount;
  }
}
module.exports = Node;