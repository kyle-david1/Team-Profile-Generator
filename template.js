const Engineer = require("./library/Engineer")
const Intern = require('./library/Intern')
const Manager = require("./library/Manager")

const createHTML = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${team[0].name}</li>
    <li class="list-group-item">${team[0].id}</li>
    <li class="list-group-item"><a href = "mailto:${team[0].email}">${team[0].email}</a></li>
    <li class="list-group-item">${team[0].office}</li>
  </ul>
</div>
 ${makeInterns(team)} 
 ${makeEngineers(team)}
</body>
</html>`
}



const makeInterns = (team) => {
  console.log(team)
  let InternCards = ""
  for(i = 0; i < team.length; i++){
    console.log(team[i].getRole())
    if(team[i].getRole() === 'Intern'){
      InternCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].name}</li>
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item"><a href = "mailto:${team[i].email}">${team[i].email}</a></li>
        <li class="list-group-item">${team[i].school}</li>
      </ul>
    </div>`
    }
  }
  return InternCards;
}

const makeEngineers = (team) => {
  console.log(team)
  let engineerCards = ""
  for(i = 0; i < team.length; i++){
    console.log(team[i].getRole())
    if(team[i].getRole() === 'Engineer') {
      engineerCards += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[i].name}</li>
        <li class="list-group-item">${team[i].id}</li>
        <li class="list-group-item"><a href = "mailto:${team[i].email}">${team[i].email}</a></li>
        <li class="list-group-item"><a href = "https://github.com/${team[i].githubUsername}">${team[i].githubUsername}</a></li>
      </ul>
    </div>`
    }
  }
  return engineerCards;
}

module.exports = createHTML;