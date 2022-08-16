const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: Number,
  repoName: String,
  username: String,
  userId: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// let save = (repos) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   })
// }

// let find = () => {
//   return Repo.find();
// }

module.exports = Repo;

// module.exports.save = save;
// module.exports.find = find;