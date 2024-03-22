import BinarySearchTree from "./bst.js";

let tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);
tree.insert(15)
tree.insert(-1)
tree.insert(-2)
tree.insert(-4)


// tree.deleteItem(4);
tree.rebalance();
tree.print();
console.log(tree.isBalanced());
console.log(tree.inOrder());

// tree.print();
// tree.inOrder((val)=>console.log(val));