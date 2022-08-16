const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const models = require('./models.js');
const data = require('../data.json');
const ghHelpers = require('../helpers/github.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //CONTROLLER
  // Disect req.body to get username
  models.getRepos()
  .then(results=>{
    for (let repo of results) {
      if (repo.username === req.body.username) { throw new Error ('User already exists'); }
    }
    return req.body.username;
  })
  .then((username)=>{
  // Send API request to GitHub on username, get repos
  return ghHelpers.getReposByUsername(username)
    .then((results)=>{
      let mapData = results.slice()
      mapData.map(repo=>{
        repo.repoId = repo.id;
        repo.repoName = repo.name;
        repo.username = repo.owner.login;
        repo.userId = repo.owner.id;
      });
      return mapData;
    })
    .catch((err)=>{res.send(err)});
  })
  .then((mapData)=>{
    // Call Model to add repos, to db
    models.addRepos(mapData)
    .then((results)=>{res.send(results);})
    .catch(err=>{res.send(err);});
  })
  .catch((err)=>{res.send(err);});
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  models.get25Repos()
    .then(results=>{res.json(results)})
    .catch(err=>{res.send(err)});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

