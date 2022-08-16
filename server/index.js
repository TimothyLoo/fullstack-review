const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const data = require('../data.json');
const ghHelpers = require('../helpers/github.js');
const models = require('../database');

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
  ghHelpers.getReposByUsername(req.body.username)
    .then((results)=>{
      let mapData = results.slice()
      mapData.map(repo=>{
        repo.repoId = repo.id;
        repo.repoName = repo.name;
        repo.username = repo.owner.login;
        repo.userId = repo.owner.id;
      });
      return models.save(mapData)
    })
  .then((qResults)=>{res.send(qResults);})
    // Call Model to add repos, to db
  .catch((err)=>{res.send(err);});
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  models.find()
    .then(results=>{res.json(results)})
    .catch(err=>{res.send(err)});
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

