import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    axios.get('/repos')
      .then((repos)=>{
        this.setState({repos: repos.data});
      })
      .catch(err=>{console.log(err)});
  }

  search (term) {
    if (!term.length) {console.log('no username to search'); return; }
    else {
    console.log(`${term} was searched`);
    // TODO
    // send a POST request to Mongo
    axios.post('/repos', {username: term})
    .then((results)=>{console.log(results)})
    .then(()=>{
      axios.get('/repos')
        .then((repos)=>{
          this.setState({repos: repos.data}); })
        .catch(err=>{console.log(err);});
    })
    .catch((err)=>{console.log(err)});
    }
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));