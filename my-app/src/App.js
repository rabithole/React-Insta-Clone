import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/searchbar/SearchBar';
// import Comments from './components/comments/CommentSection';
import PostContainer from './components/postcontainer/PostContainer';

import dummyData from './dummy-data.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
    };
  }

  componentDidMount() {
    console.log('CDM')
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className="App">
      <h1>Test</h1>
      
      <SearchBar />
      <PostContainer 
        dummyData={this.state.dummyData}
      />
      
      </div>
    );
  }
}

export default App;
