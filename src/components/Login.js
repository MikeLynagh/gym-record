import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import gymrecordlogo from '../images/gymrecordlogo.png';

export default function Login() {
	const history = useNavigate();

	const [inpval, setInpval] = useState({
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

		const getUserArr = localStorage.getItem('siteuser');
		console.log(getUserArr);

		const { email, password } = inpval;

		// add requirements
		if (email === '') {
			alert('email is required ');
		} else if (!email.includes('@')) {
			alert('please enter valid email address');
		} else if (password === '') {
			alert('password field cannot be blank');
		} else if (password.length < 5) {
			alert('password must be at least 6 characters');
		} else {
			if (getUserArr && getUserArr.length) {
				const userdata = JSON.parse(getUserArr);
				const userlogin = userdata.filter((el, k) => {
					return el.email === email && el.password === password;
				});
				// check if username entered has been registered already
				if (userlogin.length === 0) {
					alert('invalid user details');
				} else {
					console.log('user logged in successfully ');
					localStorage.setItem('user_login', JSON.stringify(getUserArr));
					// redirect to home page
					history('/create');
				}
			}
		}
	};

	return (
		<div className='main-box'>
			<img src={gymrecordlogo} className='mx-auto d-block' />

			<form>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h1>Login </h1>
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
							value='LOGIN'
							className='btn btn-dark'
							onClick={addData}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
