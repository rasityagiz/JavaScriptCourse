class Customer {
  constructor(id, customerNumber) {
    // Instance'a prototyping
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, '12345');
// Instance'a Prototyping
customer.name = 'Jack Sparrow';

// Class'a prototyping
Customer.bisey = 'Bissey';

class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super();
    this.firstName = firstName;
  }
}