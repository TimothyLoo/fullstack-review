import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => {
  const { repos } = props;

  return (
    <div>
      <h4> Repo List Component </h4>
      <div>There are {repos.length} repos.</div>
      {repos.map(repo=>
        <Repo repo={repo} key={repo.repoId}/>
      )}
    </div>
  )
}

export default RepoList;