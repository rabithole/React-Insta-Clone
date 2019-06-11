import React from 'react';
import './postContainer.css';

import Comments from '../comments/CommentSection';

const PostContainer = props => {
	console.log(props.dummyData)
	return (
		<div className='postContainer'>
			<h1>This is the Post Container</h1>
			
			 
				{props.dummyData.map(post => (
					<Comments
						thumb={post.thumbnailUrl}
						username={post.username}
					/>
				))}
		</div>
	)
}
export default PostContainer;
