const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: Number,
  repoName: String,
  username: String,
  userId: Number,
  watchers: Number,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

module.exports = {
  save: (repos) => {

    repos = repos.map(repo=>{
      return Repo.replaceOne({repoId: repo.repoId}, repo, {upsert: true})
    })
    return Promise.all(repos)
    .then(qResults=>{return qResults;})
    .catch((err)=>{return err;});
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
  },

  find : () => {
    return Repo.find().sort({watchers: 'desc'}).limit(25)
    .then((results)=>{return results;})
    .catch((err)=>{return err;})
  }
}