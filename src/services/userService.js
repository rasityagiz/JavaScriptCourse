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

  load() {
    for (const user of users) {
      switch (user.type) {
        case 'customer':
          if (!this.isCustomerInvalid(user)) {
            this.customers.push(user);
          }
          break;
        case 'employee':
          if (!this.isEmployeeInvalid(user)) {
            this.employees.push(user);
          }
          break;
        default:
          this.errors.push(new DataError('Wrong user type', user));
          break;
      }
    }
  }

  // react'ta yup kutuphanesi
  isCustomerInvalid(user) {
    let requiredFields = 'id firstName lastName city age'.split(' ');
    let hasError = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasError = true;
        this.errors.push(new DataError(`Validation failed. ${field} is required.`, user));
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasError = true;
      this.errors.push(new DataError(`Validation failed. ${user.age} is not a number.`, user));
    }

    return hasError;
  }

  isEmployeeInvalid(user) {
    let requiredFields = 'id firstName lastName city age salary'.split(' ');
    let hasError = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasError = true;
        this.errors.push(new DataError(`Validation failed. ${field} is required.`, user));
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasError = true;
      this.errors.push(new DataError(`Validation failed. ${user.age} is not a number.`, user));
    }

    return hasError;
  }

  add(user) {
    switch (user.type) {
      case 'customer':
        if (!this.isCustomerInvalid(user)) {
          this.customers.push(user);
        }
        break;
      case 'employee':
        if (!this.isEmployeeInvalid(user)) {
          this.employees.push(user);
        }
        break;
      default:
        this.errors.push(new DataError('This user can not be added. Wrong user type.', user));
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
    return this.customers.sort((customer1, customer2) => {
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