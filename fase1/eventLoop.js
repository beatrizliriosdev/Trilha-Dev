// console.log("Início");

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// console.log("Fim");

console.log("Início");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("Fim");
