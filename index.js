// index.js

let cats = ["Milo", "Otis", "Garfield"];

// 1. Destructive function to append a cat
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Destructive function to prepend a cat
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Destructive function to remove the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Destructive function to remove the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Non-destructive function to append a cat
function appendCat(name) {
  return [...cats, name]; // Return a new array
}

// 6. Non-destructive function to prepend a cat
function prependCat(name) {
  return [name, ...cats]; // Return a new array
}

// 7. Non-destructive function to remove the last cat
function removeLastCat() {
  return cats.slice(0, -1); // Return a new array excluding the last element
}

// 8. Non-destructive function to remove the first cat
function removeFirstCat() {
  return cats.slice(1); // Return a new array excluding the first element
}

// Export functions
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  removeLastCat,
  removeFirstCat,
  appendCat,
  prependCat,
};



