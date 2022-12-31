import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import gymrecordlogo from '../images/gymrecordlogo.png';

// Here, we display our Navbar
export default function Navbar() {
	return (
		// <div>
		// 	<nav class='navbar navbar-expand-lg navbar-light bg-light'>
		// 		<a class='navbar-brand' href='#'>
		// 			Navbar
		// 		</a>
		// 		<button
		// 			class='navbar-toggler'
		// 			type='button'
		// 			data-bs-toggle='collapse'
		// 			data-bs-target='#navbarNav'
		// 			aria-controls='navbarNav'
		// 			aria-expanded='false'
		// 			aria-label='Toggle navigation'
		// 		>
		// 			<span class='navbar-toggler-icon'></span>
		// 		</button>
		// 		<div class='collapse navbar-collapse' id='navbarNav'>
		// 			<ul class='navbar-nav'>
		// 				<li class='nav-item active'>
		// 					<a class='nav-link' href='#'>
		// 						Home <span class='sr-only'>(current)</span>
		// 					</a>
		// 				</li>
		// 				<li class='nav-item'>
		// 					<a class='nav-link' href='#'>
		// 						Features
		// 					</a>
		// 				</li>
		// 				<li class='nav-item'>
		// 					<a class='nav-link' href='#'>
		// 						Pricing
		// 					</a>
		// 				</li>
		// 				<li class='nav-item'>
		// 					<a class='nav-link disabled' href='#'>
		// 						Disabled
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</nav>
		// </div>
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<NavLink className='navbar-brand' to='/'>
					<a className='navbar-brand' href='#'>
						<img src={gymrecordlogo} width='50' height='50' />
					</a>
				</NavLink>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/register'>
								Sign up
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/create'>
								Record Workout
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/view-bodyweight'>
								Bodyweight History
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/add-bodyweightrecord'>
								Add bodyweight
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
