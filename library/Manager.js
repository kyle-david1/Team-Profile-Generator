const inquirer = require('inquirer');
const Employee = require('./Employee');


class Manager extends Employee {
  constructor(name, id, email, office) {
  super(name, id, email);
  this.office = office;
  }
  getRole() {return 'Manager'};
  getOffice() {return this.office};
}


// inquire prompts for the manager: Name, employee ID, email address, office number



module.exports = Manager;
