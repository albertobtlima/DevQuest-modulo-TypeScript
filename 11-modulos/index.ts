import { Customer, paginationPerPage } from "./customer";

interface SpecialCustomer extends Customer {
  couponQuantity: number;
}

const specialCustomer: SpecialCustomer = {
  couponQuantity: 10,
  name: "Maria",
  age: 32,
};

console.log(specialCustomer);

console.log(paginationPerPage);
