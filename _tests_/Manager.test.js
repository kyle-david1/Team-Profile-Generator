const Manager = require('../library/Manager');

describe('test', () => {
  it('should have a manager role', () => {
    // arrange
    const manager = new Manager('name', 'id', 'email', 'officeNumber');
    // act
    const role = manager.getRole();
    // assert
    expect(role).toBe('Manager');
  });

});

describe('officeTest', () => {
  it('should have an office number', () => {
    // arrange
    const manager = new Manager ('name', 'id', 'email', 'this.office'); 
    // act
    const office = manager.getOffice(); 
    // assert 
    expect(office).toBe('this.office');
  });
});