import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Search from '../src/components/searchbar/SearchBar';
// import Comments from './components/comments/CommentSection';
// import PostContainer from './components/postcontainer/PostContainer';

// import dummyData from './dummy-data.js';

import PostPage from '../src/components/postcontainer/PostsPage';
// import Authenticate from '../src/components/authentication/withAuthenticate';
import Login from './components/login/Login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // dummyData: [],
    };
  }

  // const ComponentFromWithAuthenticate = props => {

  // }

  // componentDidMount() {
  //   console.log('CDM')
  //   this.setState({ dummyData: dummyData });
  // }

  // search = (search) => {    
  //   this.setState({
  //     dummyData: this.state.dummyData.filter(item => {
  //      return item.username === search;
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
