import React from 'react';

const Repo = (props) => {
  const { repoId, repoName, userId, username, watchers } = props.repo;

  return (
    <div className="repo">
      <b>Repo Name:</b> {repoName}
      <b>Github Handle:</b> {username}
      <b>Watchers:</b> {watchers}
    </div>
  )
}

export default Repo;