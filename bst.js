import Node from "./node.js";
import Queue from "./queue.js";

export default class BinarySearchTree {
  constructor(source) {
    source = this.constructor.$sortAndRemoveDuplicates(source);
    this.root = this.$buildTree(source);
  }
  static $sortAndRemoveDuplicates(array){
    array = Array.from(new Set(array));
    array.sort((a,b)=> b - a);
    return array
  }

  // Builds a new tree from an array and returns its root
  $buildTree(array, root = null) {
    if (array.length < 1) return; 

    let mid = Math.floor(array.length / 2);
    let midVal = array[mid];
    if (!root) root = new Node(midVal);
    else this.insert(midVal,root);

    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);
    this.$buildTree(left, root)
    this.$buildTree(right, root)
    return root; 
  }

  // Inserts an element to the tree
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

  // Deletes a value from tree
  deleteItem(val) {
    this.$delete(this.root, val);
  }

  $delete(root, val) {
    if (!root) return null;
    else if (val > root.value) root.right = this.$delete(root.right, val);
    else if (val < root.value) root.left = this.$delete(root.left, val);
    else {
      // Case 1: Target node has no children
      if (!root.right && !root.left) {
        return null;
      }
      // Case 2: Target node has one child 
      if (!root.right) return root.left;
      else if (!root.left) return root.right;
      // Case 3: Target node has 2 children
      else {
        let min = this.getMin(root.right);
        root.value = min.value;
        root.right = this.$delete(root.right, min.value)
        return root;
      }
    }
    return root;
  }

  getMin(root){
    let prev;
    while (root){
      prev = root;
      root = root.left
    }
    return prev;
  }

  // Returns node holding passed value, or null if not found
  getNode(val) {
    let curr = this.root;
    let prev;
    while (curr){
      if (val < curr.value) {
        prev = curr;
        curr = curr.left;
      }
      else if (val > curr.value) {
        prev = curr;
        curr = curr.right;
      }
      else return curr;
    }
    return null;    
  }

  // Breadth-first traversal
  levelOrder(callback, root = this.root){
    
    // If a callback is passed, it's called with values one at a time
    if (callback){
      if (!root) return;
      let queue = new Queue();
      queue.enqueue(root);

      while(queue.data.length){
        let curr = queue.dequeue();
        if (curr.left) queue.enqueue(curr.left);
        if (curr.right) queue.enqueue(curr.right);
        callback(curr.value);
      }

    // If no callback is passed, tree elements are returned in level-order
    } else {
      if (!root) return [];
      let result = [];
      let queue = new Queue();
      queue.enqueue(root);

      while(queue.data.length){
        let curr = queue.dequeue();
        if (curr.left) queue.enqueue(curr.left);
        if (curr.right) queue.enqueue(curr.right);
        result.push(curr.value);
      }
      return result;
    }
  } 

  // Depth-first traversal (In Order)
  inOrder(callback, root = this.root){
    // If a callback is passed, it's called with values one at a time
    if (callback){
      if (!root) return;
      let curr = root; 
      this.inOrder(callback, curr.left);
      callback(curr.value);
      this.inOrder(callback, curr.right);
    }
    // If no callback is passed, tree elements are returned in order
    else {
      if (!root) return [];
      let arr = [];
      let curr = root;
      arr = arr.concat(this.inOrder(null, curr.left));
      arr.push(curr.value);
      arr = arr.concat(this.inOrder(null, curr.right));
      return arr;
    }
  }

  // Depth-first traversal (Pre Order)
  preOrder(callback, root = this.root){
    // If a callback is passed, it's called with values one at a time
    if (callback){
      if (!root) return;
      let curr = root; 
      callback(curr.value);
      this.preOrder(callback, curr.left);
      this.preOrder(callback, curr.right);
    }
    // If no callback is passed, tree elements are returned in pre-order
    else {
      if (!root) return [];
      let arr = [];
      let curr = root;
      arr.push(curr.value);
      arr = arr.concat(this.preOrder(null, curr.left));
      arr = arr.concat(this.preOrder(null, curr.right));
      return arr;
    }
  }

  // Depth-first traversal (Post Order)
  postOrder(callback, root = this.root){
    // If a callback is passed, it's called with values one at a time
    if (callback){
      if (!root) return;
      let curr = root; 
      this.postOrder(callback, curr.left);
      this.postOrder(callback, curr.right);
      callback(curr.value);
    }
    // If no callback is passed, tree elements are returned in post-order
    else {
      if (!root) return [];
      let arr = [];
      let curr = root;
      arr = arr.concat(this.postOrder(null, curr.left));
      arr = arr.concat(this.postOrder(null, curr.right));
      arr.push(curr.value);
      return arr;
    }
  }
  
  // Returns height of passed node
  getHeightOf(node){
    if (!node) return -1;
    
    return Math.max(this.getHeightOf(node.right), this.getHeightOf(node.left)) + 1;
  }

  // Prints the tree to the console
  print() {
    this.$prettyPrint(this.root);
  }

  $prettyPrint = (node, prefix = "", isLeft = true) => {
    if (!node) {
      return;
    }
    if (node.right !== null) {
      this.$prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
      this.$prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }

  };
}
