import React from 'react';
import '../App.css';

export default function Login() {
	return (
		<div class='container'>
			<div class='row'>
				<div class='col'>
					<h2 className='mt-5'>Gym-Record</h2>
					<span>Gym-Record will help you to get in great shape</span>
				</div>
				<div class='col'>
					<div>
						<form>
							<div className='m-3'>
								<input
									placeholder='Email'
									type='email'
									className='form-control'
									id='inputemail'
								/>
								<div id='emailHelp' className='form-text'>
									{' '}
									We will never share your email address with anybody{' '}
								</div>
								<input
									placeholder='Password'
									type='password'
									className='form-control'
									id='inputpassword'
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
}
