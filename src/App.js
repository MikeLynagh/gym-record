import React, { useState } from 'react';
import { BroswerRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './component-workout/Create';
import WorkoutList from './component-workout/Workoutrecord';
import BodyweightForm from './components/BodyweightForm';
import BodyweightRecord from './components/bodyweight-record';
import Edit from './components/EditBodyweight';
import Login from './components/Login';

const App = () => {
	// all states

	return (
		<div>
			<Navbar />
			{/* <Login /> */}
			<Routes>
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
