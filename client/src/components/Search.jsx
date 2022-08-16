import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange.bind(this);
    this.search.bind(this);
  }

  onChange (username) {
    this.setState({
      term: username
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input onChange={(e)=>{this.onChange(e.target.value)}}/>
      <button onClick={()=>this.search()}> Add Repos </button>
    </div>)
  }
}

export default Search;