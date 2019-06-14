import React from 'react';
import PostContainer from './PostContainer';
import Search from '../searchbar/SearchBar';
import dummyData from '../../../src/dummy-data.js';

import PropTypes from 'prop-types';


class PostPage extends React.Component {
	constructor() {
		super();
		this.state = {
			dummyData: [],
		}
	}

	componentDidMount() {
    	this.setState({ dummyData: dummyData });
    	console.log(dummyData)
    	console.log(this.state)
  	}

  	search = (search) => {
    this.setState({
	      dummyData: this.state.dummyData.filter(item => {
	       return item.username === search;
	      })
    	})
  	}

	render() {
		return (
			<div className="App" >
		        <Search search={this.search} />
		        <PostContainer 
		          dummyData={this.state.dummyData}
		        />
	        
	      	</div>
		)
	}
}

PostPage.propTypes = {
  username: PropTypes.array,
};

export default PostPage;