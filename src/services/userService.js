export default class UserService {

  // default bu dosya import edildiginde default kullanilacak
  // anlamina gelir

  constructor(loggerService) {
    this.users = [];
    this.loggerService = loggerService;
  }
  
  add(user) {
    this.users.push(user);
    this.loggerService.log(user);
  }

  list() {
    return this.users;
  }

  getById(id) {
    return this.users.find(user => user.id === id);
  }

}