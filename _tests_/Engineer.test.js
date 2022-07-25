const Engineer = require('../library/Engineer');

describe('test', () => {
  it('should have an engineer role', () => {
    // arrange
    const engineer = new Engineer('name', 'id', 'email', 'githubUsername');
    // act
    const role = engineer.getRole();
    // assert
    expect(role).toBe('Engineer');
  });

});

describe('githubTest', () => {
  it('should have a github username', () => {
    // arrange
    const engineer = new Engineer('name', 'id', 'email', 'this.githubUsername'); 
    // act
    const github = engineer.getGithub(); 
    // assert 
    expect(github).toBe('this.githubUsername');
  });
});