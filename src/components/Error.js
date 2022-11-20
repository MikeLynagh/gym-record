import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
	const history = useNavigate();

	return (
		<div>
			<div className='container'>
				<div className='error d-flex flex-column justify-content-lg-center align-items-center'>
					<h4>404 Error ! Page not found!</h4>
					<button
						className=' btn btn-dark'
						onClick={() => history('/register')}
					>
						Redirect to Sign Up Page
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
