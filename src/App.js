import React, { useState } from 'react';
import { BroswerRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './component-workout/Create';
import WorkoutList from './component-workout/Workoutrecord';
import AddWorkout from './components/AddWorkout';
import WorkoutsList from './components/bodyweight-record';

const App = () => {
	// all states

	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<WorkoutList />} />
				<Route path='/create' element={<Create />} />
				<Route path='/create-workout' element={<AddWorkout />} />
				<Route path='/view-bodyweight' element={<WorkoutsList />} />
			</Routes>
		</div>
	);
};

export default App;
