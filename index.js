import BinarySearchTree from "./bst.js";

let tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);
tree.add(15)

tree.add(-1)
tree.add(-2)
tree.add(-4)
tree.add(-8)



// tree.deleteItem(4);
tree.print();
console.log(tree.isBalanced());
console.log(tree.inOrder());

// tree.print();
// tree.inOrder((val)=>console.log(val));