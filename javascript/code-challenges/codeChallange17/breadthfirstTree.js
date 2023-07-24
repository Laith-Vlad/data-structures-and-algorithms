
function breadthFirst(theTree){
    if (!theTree) return [];
    const result = [];
    const queue = [theTree]
    while (queue.length){
        const currentNode = queue.shift();
        result.push(currentNode.value)
        if (currentNode.left) {
            queue.push(currentNode.left);
          }
          if (currentNode.right) {
            queue.push(currentNode.right);
          }
        }
      
        return result;
      }
module.exports = breadthFirst;
