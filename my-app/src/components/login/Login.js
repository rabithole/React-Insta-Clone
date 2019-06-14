import React from 'react';

import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleInputChange = e => {
    	this.setState({ [e.target.name]: e.target.value });
  	};

  	handleLoginSubmit = e => {
	    const user = this.state.username;
	    localStorage.setItem('user', user);
	    window.location.reload();
  	};

	render() {
		return (
			<div className='formContainer'> 
				<h2>Welcome to React Instaclone</h2>
				<h3>Please Login</h3>
				<form>
					<p>Username:</p> 
					<input 
					type='text' name='username' 
					placeholder='Please enter your User Name' 
					value={this.state.username}
					onChange={this.handleInputChange}
					/><br />

					<p>Password:</p> 
					<input 
					type='text' name='password' 
					placeholder='Please enter your Password' 
					value={this.state.password}
					onChange={this.handleInputChange}
					/><br />

					<button>Login</button>
				</form>
			</div>
		)
	}
}

export default Login;