// closure
// Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
// In Javascript, all functions are closures.
function add() {
  let counter = 0;
  return function increament() {
    counter++;
    return counter;
  };
}
const increament = add();
console.dir(add());
console.log(increament());
console.log(increament());
console.log(increament());
