const inquirer = require('inquirer');
const Employee = require('./Employee');


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
  super(name, id, email);
  this.officeNumber = officeNumber;
  }
  getRole() {return 'Manager'};
}


// inquire prompts for the manager: Name, employee ID, email address, office number



module.exports = Manager
