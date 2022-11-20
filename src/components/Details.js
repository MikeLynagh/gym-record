import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const details = () => {
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
		history('/register');
	};

	useEffect(() => {
		checkUser();
	}, []);

	return (
		<>
			{logindata.length === 0 ? (
				'error'
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

export default details;
