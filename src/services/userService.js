import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {

  // default bu dosya import edildiginde default kullanilacak anlamina gelir

  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  // @Can be private
  userAgeCheck(user) {
    let hasError = false;
    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasError = true;
      this.errors.push(new DataError(`Validation failed. ${user.age} is not a number.`, user));
    }
    return hasError;
  }

  // @Can be private
  isUserInvalid(user, requiredFields) {
    let hasError = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasError = true;
        this.errors.push(new DataError(`Validation failed. ${field} is required.`, user));
      }
    }
    return hasError;
  }

  // @Can be private
  addCustomer(user) {
    let requiredFields = 'id firstName lastName city age'.split(' ');
    if (!this.isUserInvalid(user, requiredFields) && !this.userAgeCheck(user)) {
      this.customers.push(user);
    }
  }

  // @Can be private
  addEmployee(user) {
    let requiredFields = 'id firstName lastName city age salary'.split(' ');
    if (!this.isUserInvalid(user, requiredFields) && !this.userAgeCheck(user)) {
      this.employees.push(user);
    }
  }


  load() {
    for (const user of users) {
      this.add(user);
    }
  }


  add(user) {
    switch (user.type) {
      case 'customer':
        this.addCustomer(user);
        break;
      case 'employee':
        this.addEmployee(user);
        break;
      default:
        this.errors.push(new DataError('Wrong user type', user));
        break;
    }
    this.loggerService.log(user);
  }

  listCustomers() {
    // return this.users;
  }

  getCustomerById(id) {
    // return this.users.find(user => user.id === id);
  }

  getCustomersSorted() {
    const arrayToSort = Object.assign([], this.customers);
    return arrayToSort.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }

}