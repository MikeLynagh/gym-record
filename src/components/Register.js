import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Register = (props) => {
	// use for naviaget
	const history = useNavigate();

	// states created for inpal and setInpval
	const [inpval, setInpval] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [data, sendData] = useState([]);

	const getdata = (e) => {
		// console.log(e.target.value);
		const { value, name } = e.target;
		// console.log(value, name);

		// setInpval will update based on value inputted by user

		setInpval(() => {
			return { ...inpval, [name]: value };
		});
	};

	const addData = (e) => {
		e.preventDefault();
		const { username, email, password } = inpval;

		// add requirements
		if (username === '') {
			alert('username is required ');
		} else if (email === '') {
			alert('email is required ');
		} else if (!email.includes('@')) {
			alert('please enter valid email address');
		} else if (password === '') {
			alert('password field cannot be blank');
		} else if (password.length < 5) {
			alert('password must be at least 6 characters');
		} else {
			console.log('data added successfully ');

			localStorage.setItem('siteuser', JSON.stringify([...data, inpval]));
		}
	};

	return (
		<div className='main-box'>
			<form>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h1>Sign Up</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>Create Username</div>
					<div className='col-md-6'>
						<input
							type='text'
							name='username'
							className='form-control'
							onChange={getdata}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>Email</div>
					<div className='col-md-6'>
						<input
							type='email'
							name='email'
							className='form-control'
							onChange={getdata}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>Password</div>
					<div className='col-md-6'>
						<input
							type='password'
							name='password'
							className='form-control'
							onChange={getdata}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<input
							type='submit'
							name='submit'
							value='Register'
							className='btn btn-dark'
							onClick={addData}
						/>
					</div>
				</div>
			</form>
			<p className='mt-3'>
				Already have an account ?{' '}
				<span>
					<NavLink to='/login'>Sign In</NavLink>
				</span>
			</p>
		</div>
	);
};

export default Register;
