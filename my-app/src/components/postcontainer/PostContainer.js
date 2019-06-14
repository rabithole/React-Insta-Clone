import React from 'react';
import './postContainer.css';

import Comments from '../comments/CommentSection';

const PostContainer = props => {
	return (
		<div>			
			{props.dummyData.map(post => (
				<Comments
					key={post.id}
					thumb={post.thumbnailUrl}
					username={post.username}
					likes={post.likes}
					mainImg={post.imageUrl}
					comments={post.comments.map((post => (
						<p><strong>{post.username}</strong> {post.text}</p>
					)))}
				/>
			))}
		</div>
	)
}
export default PostContainer;
