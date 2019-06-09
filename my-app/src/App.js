import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import Comments from './components/CommentSection';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <div className="App">
    <h1>Test</h1>
    
    <SearchBar />
    <PostContainer />
    <Comments />
    </div>
  );
}

export default App;
