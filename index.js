import BinarySearchTree from "./bst.js";

let tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);
tree.insert(15)
tree.insert(-1)
tree.insert(-2)
tree.insert(-4)
tree.insert(8)


tree.print();
;
// tree.deleteItem(4);
console.log(tree.isBalanced());
// tree.print();
// tree.inOrder((val)=>console.log(val));