export default class User {
  // Prototyping kullanarak olusturma ve atamalari yapiyoruz.
  // Saf javascript'te class diye bir sey yok, her sey fonksiyon.
  constructor(id, firstName, lastName, city) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
}
