import React from 'react';

const Repo = (props) => {
  const { repoId, repoName, userId, username, watchers, html_url} = props.repo;

  return (
    <div className="repo">
      <b>Repo Name:</b> <a href={html_url} target="_blank">{repoName}</a>
      <b>Github Handle:</b> {username}
      <b>Watchers:</b> {watchers}
    </div>
  )
}

export default Repo;