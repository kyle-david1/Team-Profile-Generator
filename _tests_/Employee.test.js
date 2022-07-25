const Employee = require('../library/Employee');

describe('test', () => {
  it('should have an employee role', () => {
    // arrange
    const employee = new Employee('name', 'id', 'email');
    // act
    const role = employee.getRole();
    // assert
    expect(role).toBe('Employee');
  });

});

describe('nameTest', () => {
  it('should have a name', () => {
    // arrange
    const employee = new Employee('this.name', 'this.id', 'this.email'); 
    // act
    const name = employee.getName(); 
    // assert 
    expect(name).toBe('this.name');
  });
});

describe('idTest', () => {
  it('should have an id', () => {
    // arrange
    const employee = new Employee('this.name', 'this.id', 'this.email'); 
    // act
    const id = employee.getId(); 
    // assert 
    expect(id).toBe('this.id');
  });
});

describe('emailTest', () => {
  it('should have an email', () => {
    // arrange
    const employee = new Employee('this.name', 'this.id', 'this.email'); 
    // act
    const email = employee.getEmail(); 
    // assert 
    expect(email).toBe('this.email');
  });
});