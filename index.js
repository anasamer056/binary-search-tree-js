import BinarySearchTree from "./bst.js";

let tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7]);

tree.print();
;
// tree.deleteItem(4);
console.log(tree.postOrder())
// tree.print();
// tree.inOrder((val)=>console.log(val));