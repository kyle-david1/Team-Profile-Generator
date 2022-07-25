const Intern = require('../library/Intern');

describe('test', () => {
  it('should have an intern role', () => {
    // arrange
    const intern = new Intern('name', 'id', 'email', 'school');
    // act
    const role = intern.getRole();
    // assert
    expect(role).toBe('Intern');
  });

});

describe('schoolTest', () => {
  it('should have a school', () => {
    // arrange
    const intern = new Intern('name', 'id', 'email', 'this.school'); 
    // act
    const school = intern.getSchool(); 
    // assert 
    expect(school).toBe('this.school');
  });
});