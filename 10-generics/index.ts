// Função genérica que aceita um argumento do tipo T
// e retorna um array de valores do mesmo tipo T
function makeArray<T>(item: T): T[] {
  return [item];
}

// Uso da função com tipo number
let numbers = makeArray(10);
console.log(numbers); // Output: [10]
numbers.filter(n => n % 2)

// Uso da função com tipo string
let names = makeArray("Bozo");
console.log(names); // Output: [Bozo]
