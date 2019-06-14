import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Search from '../src/components/searchbar/SearchBar';
// import Comments from './components/comments/CommentSection';
// import PostContainer from './components/postcontainer/PostContainer';

// import dummyData from './dummy-data.js';

import PostPage from '../src/components/postcontainer/PostsPage';
import withAuthenticate from '../src/components/authentication/withAuthenticate';
import Login from './components/login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // dummyData: [],
    };
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
