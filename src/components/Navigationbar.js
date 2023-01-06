import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import gymrecordlogo from '../images/gymrecordlogo.png';

// Here, we display our Navbar
export default function Navigat() {
	return (
		<Navbar bg='light' variant='light' expand='lg'>
			<NavLink to='/'>
				<a className='navbar-brand'>
					<img
						src={gymrecordlogo}
						width='55'
						height='55'
						alt='gym-record logo'
					/>
				</a>
			</NavLink>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='me-auto'>
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
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
