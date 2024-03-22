# Binary Search Tree (BST)

This is a JavaScript implementation of a Binary Search Tree (BST), which provides various methods for manipulating and traversing binary search trees. 

**Please note: this implementation doesn't allow duplicates.**

## Public Methods

### Constructor

#### `constructor(source: Array)`

- Creates a new BST instance with elements from passed array after removing duplicates.

### Getters

#### `root: Node`

- Getter method to retrieve the root node of the BST.

#### `height: number`

- Getter method to calculate and return the height of the BST.

### Adding and Deleting Nodes

#### `add(val: number): BinarySearchTree`

- Adds a new node with the specified value to the BST.
- Balances the tree if it becomes unbalanced after insertion.

#### `delete(val: number): BinarySearchTree`

- Deletes the node with the specified value from the BST.

### Searching Nodes

#### `find(val: number): Node | null`

- Searches for a node with the specified value in the BST.
- Returns the node if found, otherwise returns `null`.

### Traversal Methods

#### `levelOrder(callback?: Function): Array<number>`

- Performs a breadth-first traversal of the BST.
- If a callback function is provided, it is called with each node's value during traversal.
- Returns an array of node values in level-order if no callback is provided.

#### `inOrder(callback?: Function): Array<number>`

- Performs an in-order traversal of the BST.
- If a callback function is provided, it is called with each node's value during traversal.
- Returns an array of node values in in-order if no callback is provided.

#### `preOrder(callback?: Function): Array<number>`

- Performs a pre-order traversal of the BST.
- If a callback function is provided, it is called with each node's value during traversal.
- Returns an array of node values in pre-order if no callback is provided.

#### `postOrder(callback?: Function): Array<number>`

- Performs a post-order traversal of the BST.
- If a callback function is provided, it is called with each node's value during traversal.
- Returns an array of node values in post-order if no callback is provided.

### Tree Manipulation

#### `isBalanced(): boolean`

- Checks whether the BST is balanced (i.e., the height difference between the left and right subtrees is at most 1).
- Returns `true` if the tree is balanced, otherwise returns `false`.

#### `rebalance(): BinarySearchTree`

- Replances and returns the rebalanced BST instance.

### Printing

#### `print(): void`

- Prints the BST structure to the console in a readable format.

## Usage Example

```javascript
// Import the BinarySearchTree class
import BinarySearchTree from "./BinarySearchTree.js";

// Create a new BST instance
const bst = new BinarySearchTree([5, 3, 7, 2, 4, 6, 8]);

// Perform operations on the BST
bst.add(9);
bst.delete(4);

// Print the BST structure
bst.print();

// Perform traversal
const inOrderTraversal = bst.inOrder();
console.log("In-order traversal:", inOrderTraversal);

// Or define a callback function to be used with inOrder method
const callback = (value) => {
  console.log(value); // Print each node's value during traversal
};

// Perform in-order traversal with the callback
console.log("In-order traversal with callback:");
bst.inOrder(callback);
```

## Dependencies

- This implementation relies on the `Node` class and the `Queue` class, which should be imported from separate files (`node.js` and `queue.js`).