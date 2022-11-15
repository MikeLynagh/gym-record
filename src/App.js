import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './component-workout/Create';
import WorkoutList from './component-workout/Workoutrecord';
import BodyweightForm from './components/BodyweightForm';
import BodyweightRecord from './components/bodyweight-record';
import Edit from './components/EditBodyweight';
import Login from './components/Login';
import useToken from './components/useToken';

const App = () => {
	const { token, setToken } = useToken();

	// if there is no token provided, show Login page
	if (!token) {
		return <Login setToken={setToken} />;
	}
	// all states

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Login />} />
				<Route exact path='/' element={<WorkoutList />} />
				<Route path='/create' element={<Create />} />
				<Route path='/add-bodyweightrecord' element={<BodyweightForm />} />
				<Route path='/view-bodyweight' element={<BodyweightRecord />} />
				<Route path='/edit' element={<Edit />} />
			</Routes>
		</div>
	);
};

export default App;
