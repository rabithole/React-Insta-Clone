import React from 'react';

import './CommentSection.css';
import '../postcontainer/postContainer.css';


class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			newComment: '',
			username: 'Robert',
			likes: props.likes,
		}
	}

	addLike = (e) => {
		this.setState({
			likes: this.state.likes + 1
		})
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewComment = (e) => {
	    e.preventDefault();	    

	    this.setState({
 			 comments: [...this.state.comments, <p><strong>{this.state.username}</strong> {this.state.newComment}</p>]
			});

	    // const listComments = [...this.state.comments];
    	// localStorage.setItem('commentState', this.state.comments)
    	console.log(this.state.comments )
    	// this.setState({ localStorage.getItem( 'commentState', this.state.comments )})

	    this.setState({ newComment: '' });
  	};

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
					
					{this.state.comments.map(comment => <div>{comment}</div>)}

					<form onSubmit={this.addNewComment}> 
						<input 
							type='text' 
							placeholder='Add a comment...' 
							name='newComment'
							value={this.state.newComment}
							onChange={this.handleChange}
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
