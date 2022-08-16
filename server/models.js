const db = require('../database');

module.exports = {
  // Add repos to db
  addRepos: (repos) => {
    // call database add
    return db.insertMany(repos)
    .then((results)=>{ return results; })
    .catch((err)=>{ return err; });
  },

  // Get 25 repos from db
  get25Repos: ()=>{
    // get from database
    // return 25 repos
    return db.find().sort({watchers: 'desc'}).limit(25)
    .then((results)=>{return results;})
    .catch(err=>{return err;});
  },

  getRepos: ()=>{
    return db.find()
    .then((results)=>{return results;})
    .catch(err=>{return err;});
  }
}


