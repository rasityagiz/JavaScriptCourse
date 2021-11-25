import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

/* let user1 = new User(1, 'Yagiz', 'Bozca', 'Bilecik');
let user2 = new User(2, 'Fadik', 'Bozca', 'Bilecik');
userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(2)); */


/* let customer = { id: 1, firstName: 'Yagiz' };
// Prototyping
customer.lastName = 'Bozca'; */

console.log('------------------------');
userService.load();

let customerToAdd = new Customer('6', 'Tarcin', 'Bozca', 'Evrese', false);
customerToAdd.type = 'customer';

userService.add(customerToAdd);
console.log('Customers: ', userService.customers);
console.log('Employees: ', userService.employees);
console.log('Errors: ', userService.errors);
console.log('Sorted Customers: ', userService.getCustomersSorted());