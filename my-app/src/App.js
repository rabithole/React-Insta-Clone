import React from 'react';
import logo from './logo.svg';
import './App.css';

import Search from '../src/components/searchbar/SearchBar';
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

  search = (search) => {
    console.log(search)
    
    this.setState({
      dummyData: this.state.dummyData.filter(item => {
        console.log(item.username)
       return item.username === search;
      })
    })
    console.log(this.state)
    console.log(this.state.dummyData[1].username)
  }

  render() {
    return (
      <div className="App">
      
      <Search search={this.search} />
      <PostContainer 
        dummyData={this.state.dummyData}
      />
      
      </div>
    );
  }
}

export default App;
