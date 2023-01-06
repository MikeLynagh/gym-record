import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Create from './component-workout/Create';
import WorkoutList from './component-workout/Workoutrecord';
import BodyweightForm from './components/BodyweightForm';
import BodyweightRecord from './components/bodyweight-record';
import Edit from './components/EditBodyweight';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import Error from './components/Error';
import './App.css';

const App = () => {
	// function to set boolean to true if user logged in
	const checkUser = () => {
		const getuser = localStorage.getItem('user_login');
		if (getuser && getuser.length !== 0) {
			return true;
		} else {
			return false;
		}
	};

	const user = checkUser();

	return (
		<div>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Register />} />
				<Route
					exact
					path='/workoutlist'
					element={user ? <WorkoutList /> : <Navigate to='/' />}
				/>
				<Route
					path='/create'
					element={user ? <Create /> : <Navigate to='/' />}
				/>
				<Route
					path='/add-bodyweightrecord'
					element={user ? <BodyweightForm /> : <Navigate to='/' />}
				/>
				<Route
					path='/view-bodyweight'
					element={user ? <BodyweightRecord /> : <Navigate to='/' />}
				/>
				<Route path='/edit' element={<Edit />} />
				<Route path='/user' element={<Details />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
