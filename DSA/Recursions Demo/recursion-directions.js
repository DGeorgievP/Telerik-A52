// up the stack
const recursiveLoopUp = (start, end) => {
  if (start === end) {
    return;
  }

  console.log(start);
  recursiveLoopUp(start + 1, end);
};

recursiveLoopUp(0, 5); // print in increasing order

// down the stack
const recursiveLoopDown = (start, end) => {
  if (start === end) {
    return;
  }

  recursiveLoopDown(start + 1, end);
  console.log(start);
};

recursiveLoopDown(0, 5); // print in decreasing order
