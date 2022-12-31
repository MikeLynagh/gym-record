import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Details = () => {
	const [logindata, setLoginData] = useState([]);
	console.log(logindata);

	const history = useNavigate();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const checkUser = () => {
		const getuser = localStorage.getItem('user_login');
		if (getuser && getuser.length) {
			const user = JSON.parse(getuser);
			// console.log(user)
			setLoginData(user);
		}
	};

	const userlogout = () => {
		// removes details for current user logged in
		localStorage.removeItem('user_login');
		history('/');
	};

	useEffect(() => {
		checkUser();
	}, []);

	return (
		<>
			{logindata.length === 0 ? (
				<div>
					<div className='container'>
						<div className='error d-flex flex-column justify-content-lg-center align-items-center'>
							<h4>404 Error !User not found!</h4>
							<button className=' btn btn-dark' onClick={() => history('/')}>
								Sign up or Login
							</button>
						</div>
					</div>
				</div>
			) : (
				<div>
					<h1>User details </h1>
					<h1>{logindata[0].username}</h1>
					<Button onClick={userlogout}>LOG OUT</Button>
				</div>
			)}
		</>
	);
};

export default Details;
