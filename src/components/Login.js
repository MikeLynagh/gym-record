import React, { useState, useEffect } from 'react';
import { propTypes } from 'prop-types';
import '../App.css';

async function LoginUser(credentials) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export default function Login({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await LoginUser({
			username,
			password,
			email,
		});
		setToken(token);
	};

	return (
		<div class='container mt-5'>
			<div class='row'>
				<div class='col'>
					<h2 className='mt-5'>Gym-Record</h2>
					<span>
						Gym-Record will help you to get in great shape physically!
					</span>
				</div>
				<div class='col'>
					<div>
						<form onSubmit={handleSubmit}>
							<div className='m-3'>
								<label>Username</label>
								<input
									placeholder='Username'
									type='text'
									required
									name='username'
									className='form-control'
									onChange={(e) => setUserName(e.target.value)}
								/>
								<label>Email</label>
								<input
									placeholder='e.g. Johndoe@gmail.com'
									type='email'
									required
									name='email'
									className='form-control'
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label>Password</label>
								<input
									placeholder='Password'
									type='password'
									required
									className='form-control'
									name='password'
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button className='btn btn-dark m-1'>Login</button>
								<button className='btn btn-dark '>Signup</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

	Login.propTypes = {
		setToken: propTypes.func.isRequired,
	};
}
