import { BinarySearchTreeNode } from "./binarySearchTreeNode.js";

export class BinarySearchTree {
  #root = null;

  get root() {
    return this.#root;
  }

  insert() {

    const insertFn = (currentNode, val) => {

      if (!currentNode) {
        return new BinarySearchTreeNode(val)
      }

      if (val > currentNode.val) {
        currentNode.right = insertFn(currentNode.right, val)
      } else {
        currentNode.left = insertFn(currentNode.left, val)
      }

      return currentNode
    }
    return this.#root = insertFn(this.#root)
  }

  //Did not have time for this sadly.Started it one hour before deadline.Submitting it now like this and wll finish it during the weekend. 
  

  // this function is used to help with testing
  __testSetup(root) {
    this.#root = root;
  }
}
