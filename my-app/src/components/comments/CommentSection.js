import React from 'react';


const Comments = props => {
	return (
		<div>
			<h1>This is the Comment Section</h1>
			<img src={props.thumb} alt={props.username}/>
			<p>{props.username}</p>
		</div>
	)
}
export default Comments;
