Counter Function

Create a function createCounter() that returns another function.

Every time the returned function is called, it should increase the count by 1.
The count variable should not be directly accessible.

Expected Output:

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

