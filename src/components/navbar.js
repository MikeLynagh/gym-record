import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import gymrecordlogo from '../images/gymrecordlogo.png';

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<NavLink className='navbar-brand' to='/'>
					<a className='navbar-brand'>
						<img
							src={gymrecordlogo}
							width='50'
							height='50'
							alt='gym-record logo'
						/>
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
							<NavLink className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/workoutlist'>
								Previous Workouts
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
						<li className='nav-item'>
							<NavLink className='nav-link' to='/user'>
								Logout
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
