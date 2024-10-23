function greet(name: string) {
  console.log(`Olá, ${name}`);
}

const saudar = greet("Bozo");
console.log(saudar)

function doubleNumber(number: number): number {
  return number * 2;
}

const resultado = doubleNumber(4);
console.log(resultado);
