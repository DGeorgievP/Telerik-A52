// A recursive structure with branches to iterate over
const root = {
  number: 1,
  left: {
    number: 2,
    left: {
      number: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    number: 4,
    left: null,
    right: {
      number: 5,
      left: null,
      right: null,
    },
  },
};

const findNumberNode = (number, currentNode) => {
  if (currentNode === null) {
    return null;
  }

  if (number === currentNode.number) {
    return currentNode;
  }

  const leftResult = findNumberNode(number, currentNode.left);
  if (leftResult) {
    return leftResult;
  }

  const rightResult = findNumberNode(number, currentNode.right);
  if (rightResult) {
    return rightResult;
  }

  return null;
};

console.log(findNumberNode(5, root));
