import React from 'react';

const Repo = (props) => {
  const { repoId, repoName, userId, username, watchers, html_url} = props.repo;

  return (
    <div className="repo">
      <span><b>Repo Name:</b> <a href={html_url} target="_blank">{repoName}</a></span>
      <span><b>Github Handle:</b><em> {username}</em></span>
      <span><b>Watchers:</b><em> {watchers}</em></span>
    </div>
  )
}

export default Repo;