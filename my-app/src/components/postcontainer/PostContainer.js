import React from 'react';
import './postContainer.css';

import Comments from '../comments/CommentSection';

const PostContainer = props => {
	console.log(props.dummyData)
	return (
		<div className='postContainer'>
			<h1>This is the Post Container</h1>
			
			<Comments />
		</div>
	)
}
export default PostContainer;
