import React from 'react';

import './CommentSection.css';
import '../postcontainer/postContainer.css';


class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: props.likes,
		}
	}

	addLike = (e) => {
		this.setState({
			likes: this.state.likes + 1
		})
	}

	render(props){
		return (
			<div className='postContainer'>
				<p className='commentTitle'>
					<img src={this.props.thumb} className='userImg' alt={this.props.username}/>
					{this.props.username}
				</p>
				
				<img src={this.props.mainImg} alt={this.props.username} className='mainImg'/>

				<div className='commentDiv'>
							{/*Heart image that connects to the addLike function*/}
					<img src='img/instagram-heart.png' alt='Like heart' onClick={this.addLike} />
					<p>{this.state.likes} likes</p> 
					
					{this.props.comments.map(comment => <div>{comment}</div>)}

					<form> 
						<input 
							type='text' 
							placeholder='Add a comment...' 
							name='newComment'
							value={this.props.newComment}
							/>
					</form>
				</div>

			</div>
		)
	}
	
}
export default Comments;


// {this.state.comments.map(comment => <div> {comment}</div>)}
// onChange={this.handleChange}
// onSubmit={this.addNewComment}
