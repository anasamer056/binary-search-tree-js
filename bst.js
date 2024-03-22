import Node from "./node.js";

export default class BinarySearchTree {
  constructor(source) {
    this.root = this.buildTree(source);
  }
  buildTree(array, root = null) {
    if (array.length < 1) return; 

    let mid = Math.floor(array.length / 2);
    let midVal = array[mid];
    if (!root) root = new Node(midVal);
    else this.insert(midVal,root);

    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);
    this.buildTree(left, root)
    this.buildTree(right, root)
    return root; 
  }

  insert(val, root = this.root) {
    if (!root) {
      root = new Node(val);
      return this;
    }

    // Find the target node
    let curr = root;
    let parent;
    while (curr) {
      parent = curr;
      if (val > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    // Insert the value 
    if (val > parent.value) {
      parent.right = new Node(val);
    } else {
      parent.left = new Node(val);
    }
  }

  inOrder(callback, root = this.root){
    if (!root) return;
    
    let curr = root; 
    this.inOrder(callback, curr.left);
    callback(curr.value);
    this.inOrder(callback, curr.right);
  
  }

  print() {
    this.prettyPrint(this.root);
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (!node) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }

  };
}
