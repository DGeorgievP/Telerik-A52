// A recursive structure with branches to iterate over
const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 4,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

const sumNodes = (root) => {
  
  if(root === null) {
    return 0
  }

  const leftSum = sumNodes(root.left)
  const rightSum = sumNodes(root.right)

return root.value + leftSum + rightSum
};

// should print 15
console.log(sumNodes(root));

