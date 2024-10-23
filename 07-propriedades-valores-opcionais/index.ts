type Customer = {
  firstName: string;
  lastName?: string;
  age: number;
};

const newCustomer: Customer = {
  firstName: "Bozo",
  age: 43,
};

console.log(newCustomer);

function printName(firstName: string, lastName?: string) {
  console.log(`O primeiro nome é: ${firstName}`);
  console.log(`O último nome é: ${lastName}`);
}

printName("Bozo");

printName("Bozo", "Silva");
