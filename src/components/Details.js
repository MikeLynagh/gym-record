import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const details = () => {
	const [logindata, setLoginData] = useState([]);
	console.log(logindata);

	const Birthday = () => {
		const getuser = localStorage.getItem('siteuser');
		if (getuser && getuser.length) {
			const user = JSON.parse(getuser);
			// console.log(user)
			setLoginData(user);
		}
	};

	const userlogout = () => {
		localStorage.removeItem('user_login');
	};

	useEffect(() => {
		Birthday();
	}, []);

	return (
		<div>
			{logindata.length === 0 ? (
				'error'
			) : (
				<div>
					<h1>User details </h1>
					<h1>{logindata[0].username}</h1>
					<Button onClick={userlogout}>LOG OUT</Button>
				</div>
			)}
		</div>
	);
};

export default details;
