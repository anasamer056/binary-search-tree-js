import Queue from "./queue.js";

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(4);
queue.enqueue(45);
let data = queue.dequeue();
console.log(queue.data);
console.log(data);