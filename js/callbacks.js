function main(callback) {
  console.log("Hello World");
  setTimeout(() => {
    console.log("I am from setTimeout");
    callback();
  }, 2000);
  console.log("I am from main thread");
}

main(() => {
  console.log("Callback executed");
});
